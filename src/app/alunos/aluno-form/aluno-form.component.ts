import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { FormCandeactivate } from '../../guards/form-candeactivate';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: [ './aluno-form.component.css' ],
})
export class AlunoFormComponent implements OnInit, OnDestroy, FormCandeactivate {
  inscricao: Subscription = new Subscription();
  private formMudou: boolean = false;
  public aluno: Aluno | any;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // this.inscricao = this.route.params.subscribe((params: any) => {
    //   let id = params['id'];
    //
    //   this.aluno = this.alunosService.getAluno(id);
    //
    //   if (!this.aluno) {
    //     this.aluno = {};
    //   }
    // });
    this.inscricao = this.route.data.subscribe(({ aluno }) => {
      this.aluno = aluno;
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  onInput() {
    console.log('Form mudou');
    this.formMudou = true;
  }

  podeMudarRota(): boolean {
    let value: boolean = true;
    if (this.formMudou) {
      value = confirm('Tem certeza que deseja sair da página?');
    }

    return value;
  }

  podeDesativar(): boolean {
    return this.podeMudarRota();
  }
}
