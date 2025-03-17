import { Component } from '@angular/core';
import { Ordenador } from '../ordenador';
import { RouterLink } from '@angular/router';
import { OrdenadorRestService } from '../ordenador-rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listaordenadores',
  imports: [RouterLink],
  templateUrl: './listaordenadores.component.html',
  styleUrl: './listaordenadores.component.scss'
})
export class ListaordenadoresComponent {

  listaOrdenador: Ordenador[]=[];
  campoSeleccionado: string = '';
  direccionSeleccionada: 'ASC' | 'DESC' = 'ASC';
    constructor (private ordenadorRestService:OrdenadorRestService){
  
      ordenadorRestService.buscarTodos().subscribe((datos)=>{
        this.listaOrdenador=datos;
      })
    }
    public borrar (numserie:number){
      
  
    this.ordenadorRestService.borrar(numserie).subscribe(()=>{
      this.ordenadorRestService.buscarTodos().subscribe((datos)=>{
  
        this.listaOrdenador=datos;
      })
  });
}
public buscarOrdenados(campo: string) {
  if (this.campoSeleccionado === campo) {
    this.direccionSeleccionada = this.direccionSeleccionada === 'ASC' ? 'DESC' : 'ASC';
  } else {
    this.campoSeleccionado = campo;
    this.direccionSeleccionada = 'ASC';
  }

  this.ordenadorRestService.buscarOrdenados(campo, this.direccionSeleccionada).subscribe(data => {
    this.listaOrdenador = data;
  });
}
confirmarBorrado(numserie: number) {
  Swal.fire({
    title: '¿Está seguro de que desea borrar este ordenador?',
    text: "¡Esta acción no se puede deshacer!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, borrar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      this.borrar(numserie);
      Swal.fire(
        'Borrado!',
        'El ordenador ha sido borrado.',
        'success'
      );
    }
  });
}
}
