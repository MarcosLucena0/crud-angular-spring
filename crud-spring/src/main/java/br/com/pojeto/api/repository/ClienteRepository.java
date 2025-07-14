package br.com.pojeto.api.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.pojeto.api.model.Cliente;

@Repository
public interface ClienteRepository extends CrudRepository<Cliente, Long > {
       
}
