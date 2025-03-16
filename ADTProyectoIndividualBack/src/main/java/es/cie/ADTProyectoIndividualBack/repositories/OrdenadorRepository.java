package es.cie.ADTProyectoIndividualBack.repositories;

import java.util.List;

import es.cie.ADTProyectoIndividualBack.negocio.Ordenador;

public interface OrdenadorRepository {

    List<Ordenador> buscarTodos ();

    void insertar (Ordenador ordenador);

    void borrar (int numserie);

    List<Ordenador> buscarOrdenados (String campo, String direccion);

}
