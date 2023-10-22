import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TarefaCadastrarEditarComponent } from "./tarefa-cadastrar-editar/tarefa-cadastrar-editar.component";
import { TarefaResolverService } from "./tarefa-resolver.service";

const routes: Routes = [
    {
        path: "",
        component: TarefaCadastrarEditarComponent,
        resolve: {
            item: TarefaResolverService,
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TarefaCadastrarEditarRoutingModule {}
