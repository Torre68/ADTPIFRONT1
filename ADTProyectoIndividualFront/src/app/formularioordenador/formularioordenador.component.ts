import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ordenador } from '../ordenador';
import { OrdenadorRestService } from '../ordenador-rest.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formularioordenador',
  imports: [FormsModule],
  templateUrl: './formularioordenador.component.html',
  styleUrl: './formularioordenador.component.scss'
})
export class FormularioordenadorComponent {

  ordenador : Ordenador = {} as Ordenador; 
  constructor(private ordenadorRestService:OrdenadorRestService, private router:Router) {
  
  }
  public insertar() {
    this.ordenadorRestService.insertar(this.ordenador).subscribe(
      (datos) => {
        Swal.fire({
          title: 'Éxito',
          text: 'Ordenador guardado con éxito',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['/listaordenadores']);
        });
      },
      (error) => {
        if (error.status === 500) { 
          Swal.fire({
            title: 'Error',
            text: 'Número de serie duplicado. Por favor, ingrese un número de serie único.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        } else {
          Swal.fire({
            title: 'Error',
            text: 'Ocurrió un error al guardar el ordenador. Por favor, pruebe nuevamente.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      }
    );
  }
}