package br.com.pojeto.api.controller;

import org.springframework.web.bind.annotation.RestController;

import br.com.pojeto.api.model.Cliente;
import br.com.pojeto.api.repository.ClienteRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class Controller {

    @Autowired
    private ClienteRepository acao;


    @PostMapping("/")
    public Cliente cadastrar(@RequestBody Cliente c){
        return acao.save(c);
    }


    @GetMapping("/")
    public Iterable<Cliente> listar(){
        return acao.findAll();
    }


    @PutMapping("/")
    public Cliente editar(@RequestBody Cliente c) {
        return acao.save(c);
    }


    @DeleteMapping("/{id}")
    public void remover(@PathVariable Long id) {
        acao.deleteById(id);
    }
    
}
