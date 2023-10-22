import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    {
        path: "tarefas",
        loadChildren: () => import("./tarefas/TarefaListaComponent/tarefa-listar.module").then((modulo) => modulo.TarefaListarModule),
    },
    {
        path: "tarefas/cadastrar",
        loadChildren: () =>
            import("./tarefas/tarefa-cadastrar-editar/tarefa-cadastrar-editar.module").then(
                (modulo) => modulo.TarefaCadastrarEditarModule
            ),
    },
    {
        path: "tarefas/editar/:id",
        loadChildren: () =>
            import("./tarefas/tarefa-cadastrar-editar/tarefa-cadastrar-editar.module").then(
                (modulo) => modulo.TarefaCadastrarEditarModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
