import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {

  constructor() { }

  getCursos(): Array<any> {
    return [
      { id: 1, name: 'Angular 2' },
      { id: 2, name: 'PHP' },
    ];
  }

  getCurso(id: number): any {
    return this.getCursos().find(curso => curso.id == id);
  }
}
