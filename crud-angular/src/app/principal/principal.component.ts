import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/Cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  //Objeto do tipo cliente
  cliente = new Cliente();

  //Variavel para visibilidade dos botões
  btnCadastro:boolean = true;

  //JSON de clientes
  clientes:Cliente[] = [];

  //Variavel para visibilidade da tabela
  tabela:boolean = true;

  constructor(private servico:ClienteService){}



  //metodo de inicialização
  ngOnInit() {
    this.selecionar();
  }

  //Medodo de seleção
  selecionar():void {
    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno);
  }

  //metodo de cadastro
  cadastrar(): void{
    this.servico.cadastrar(this.cliente)
    .subscribe(retorno => {

      //cadastrar o cliente no vetor
      this.clientes.push(retorno);

      //Limpar formulario
      this.cliente = new Cliente();

      //Mensagem
      alert('Cliente cadastrado com sucesso');
    });
  }

  //metodo para selecionar um cliente especifico
  selecionarCliente(posicao:number):void{

    //selecinar cliente no vetor
    //this.cliente = this.clientes[posicao];
    this.cliente = { ...this.clientes[posicao] };

    //visibilidade dos botoes
    this.btnCadastro = false;

    //visibilidade da tabela
    this.tabela = false;
  }


  //metodo para editar cliente
  editar():void{

    this.servico.editar(this.cliente)
    .subscribe(retorno => {

      //obter posição do vetor onde esta o cliente
      let posicao = this.clientes.findIndex(obj => {
        return obj.id == retorno.id;
      });

      //Alterar os dados do cliente no vetor
      this.clientes[posicao] = retorno;

      //Limpar formulario
      this.cliente = new Cliente();

      //visibilidade dos botoes
      this.btnCadastro = true;

      //visibilidade da tabela
      this.tabela = true;

      //mensagem
      alert('Cliente alterado com sucesso!')

    })
  }

  //metodo para remover cliente
  remover():void{

    if (this.cliente.id === undefined) {
    alert('Selecione um cliente válido para remover.');
    return;
  }

    this.servico.remover(this.cliente.id)
    .subscribe(retorno => {

      //obter posição do vetor onde esta o cliente
      let posicao = this.clientes.findIndex(obj => {
        return obj.id == this.cliente.id;
      });

      //Remover os dados do cliente no vetor
      this.clientes.splice(posicao, 1);

      //Limpar formulario
      this.cliente = new Cliente();

      //visibilidade dos botoes
      this.btnCadastro = true;

      //visibilidade da tabela
      this.tabela = true;

      // Atualizar a tabela com dados atualizados do backend
      //this.selecionar();

      //mensagem
      alert('Cliente removido com sucesso!')
    })
  }




  //metodo para cancelar
  cancelar():void{

      //Limpar formulario
      this.cliente = new Cliente();

      //visibilidade dos botoes
      this.btnCadastro = true;

      //visibilidade da tabela
      this.tabela = true;
  }



}
