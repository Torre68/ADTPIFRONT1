import { Routes } from '@angular/router';
import { ListaordenadoresComponent } from './listaordenadores/listaordenadores.component';
import { FormularioordenadorComponent } from './formularioordenador/formularioordenador.component';

export const routes: Routes = [

{path:"listaordenadores", component:ListaordenadoresComponent},
{path:"listaordenadores", component:ListaordenadoresComponent},
{path:"formularioordenador", component:FormularioordenadorComponent},
{path: "", component:ListaordenadoresComponent}


];