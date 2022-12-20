import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CursosService } from './cursos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {
  cursos: Array<any> = [];
  pagina: number = 0;
  inscricao: Subscription = new Subscription();

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router,
  ) {  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    this.inscricao = this.route.queryParams.subscribe((queryParam: any) => this.pagina = queryParam['pagina']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  nextPage() {
    this.router.navigate(['/cursos'], {
      queryParams: {'pagina': ++this.pagina}
    })
  }
}
