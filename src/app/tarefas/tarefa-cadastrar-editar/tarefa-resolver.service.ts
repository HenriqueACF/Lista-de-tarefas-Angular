import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { TarefaService } from "../tarefa.service";
import { of } from "rxjs";
import { Item } from "../tarefa.model";

@Injectable({
    providedIn: "root",
})
export class TarefaResolverService implements Resolve<Item> {
    constructor(private itemService: TarefaService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params["id"];
        if (id) {
            return this.itemService.pesquisarPorId(id);
        }
        return of({} as Item);
    }
}
