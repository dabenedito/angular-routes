import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosComponent } from './alunos.component';

import { AlunosGuard } from '../guards/alunos.guard';
import { AlunosService } from './alunos.service';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

@NgModule({
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent,
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule,
  ],
  exports: [
    AlunosComponent,
  ],
  providers: [
    AlunosService,
    AlunosGuard,
    AlunosDeactivateGuard,
    AlunoDetalheResolver,
  ],
})
export class AlunosModule {
}
