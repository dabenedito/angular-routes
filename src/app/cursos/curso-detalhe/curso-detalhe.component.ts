import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  id: number | undefined;
  inscricao: Subscription = new Subscription();
  curso: any = null;

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
      this.curso = this.cursosService.getCurso(this.id);
    });

    if (this.curso == null) {
      this.router.navigate(['/cursos/notfound']);
    }
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
