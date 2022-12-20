import { Injectable } from '@angular/core';
import { Aluno } from './aluno';


@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  private alunos: Array<Aluno> = [
    { id: 1, nome: "Mr. Verline Zulauf", email: 'susanne.kaufman@example.com' },
    { id: 2, nome: "Neta Dare", email: 'deanna.blair@example.com' },
    { id: 3, nome: "Dr. Herman O'Hara", email: 'harley.harrington@example.com' },
    { id: 4, nome: "Darrell Weimann", email: 'francisco.sexton@example.com' },
    { id: 5, nome: "Kelle Hermann", email: 'bertie.holcomb@example.com' },
    { id: 6, nome: "Jarod Hahn", email: 'carmella.pollard@example.com' },
    { id: 7, nome: "Randa Gibson V", email: 'alexis.dickerson@example.com' },
    { id: 8, nome: "Ms. Son Braun", email: 'earle.wood@example.com' },
    { id: 9, nome: "Mrs. Bula McKenzie", email: 'vance.steele@example.com' },
  ]

  constructor() { }

  getAlunos(): Array<any> {
    return this.alunos;
  }

  getAluno(id: any): any {
    return this.alunos.find(aluno => aluno.id == id);
  }
}
