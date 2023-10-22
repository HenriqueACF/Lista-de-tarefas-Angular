import { Component, OnInit } from "@angular/core";
import { TarefaService } from "../../tarefa.service";
import { Item } from "../../tarefa.model";
import { Page, PageRequest } from "src/app/_util/Pagination";
import { PageEvent } from "@angular/material/paginator";
import { take } from "rxjs/operators";
import { Sort } from "@angular/material/sort";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UntypedFormGroup, UntypedFormBuilder } from "@angular/forms";

@Component({
    selector: "app-tarefas-listar",
    templateUrl: "./tarefa-listar.component.html",
    styleUrls: ["./tarefa-listar.component.scss"],
})
export class TarefaListarComponent implements OnInit {
    colunasTabela = ["id", "nome", "cpf", "responsavel", "prazo", "status"];

    page: Page<Item> = new Page([], 0);
    pageEvent: PageEvent;
    sortEvent: Sort;

    carregando = false;

    formGroupPesquisa: UntypedFormGroup;

    constructor(
        private itemService: TarefaService,
        private matSnackBar: MatSnackBar,
        private formBuilder: UntypedFormBuilder
    ) {}

    ngOnInit() {
        this.formGroupPesquisa = this.formBuilder.group({
            nome: [null],
        });
        this.listarItens();
    }

    limparPesquisa() {
        this.formGroupPesquisa.reset();
        this.listarItens();
    }

    listarItens() {
        this.carregando = true;
        const queryAdicional = new Map();
        if (this.formGroupPesquisa.value.nome) {
            queryAdicional.set("nome_like", this.formGroupPesquisa.value.nome);
        }
        this.itemService
            .listar(
                new PageRequest(
                    {
                        pageNumber: this.pageEvent ? this.pageEvent.pageIndex : 0,
                        pageSize: this.pageEvent ? this.pageEvent.pageSize : 5,
                    },
                    {
                        property: this.sortEvent ? this.sortEvent.active : "id",
                        direction: this.sortEvent ? this.sortEvent.direction : "asc",
                    },
                    queryAdicional
                )
            )
            .pipe(take(1))
            .subscribe({
                next: (page) => {
                    this.page = page;
                    this.carregando = false;
                },
                error: (error) => {
                    this.page = new Page([], 0);
                    this.carregando = false;
                    this.matSnackBar.open("Erro ao listar tarefas", null, {
                        duration: 5000,
                        panelClass: "red-snackbar",
                    });
                },
            });
    }
}
