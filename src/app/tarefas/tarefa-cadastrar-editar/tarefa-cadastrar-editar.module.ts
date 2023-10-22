import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefaCadastrarEditarRoutingModule } from './tarefa-cadastrar-editar-routing.module';
import { TarefaCadastrarEditarComponent } from './tarefa-cadastrar-editar/tarefa-cadastrar-editar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { DialogoConfirmacaoModule } from 'src/app/_shared/dialogo-confirmacao/dialogo-confirmacao.module';
import { MatDatepickerModule } from "@angular/material/datepicker";

@NgModule({
    declarations: [TarefaCadastrarEditarComponent],
    imports: [
        CommonModule,
        TarefaCadastrarEditarRoutingModule,
        DialogoConfirmacaoModule,

        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,

        MatToolbarModule,
        MatButtonModule,
        MatDatepickerModule
    ]
})
export class TarefaCadastrarEditarModule { }
