import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefaListarComponent } from './tarefa-listar/tarefa-listar.component';


const routes: Routes = [
    {path: "", component: TarefaListarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefaListarRoutingModule { }
