import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  providers: [CursosService],
})
export class CursosComponent implements OnInit {
  cursos = [];
  // cursosService: CursosService;

  constructor(private cursosService: CursosService) {
    // Essa é a forma sem injeção de dependências, é necessário instanciar a classe.
    // this.cursosService = new CursosService();
    //Essa é a forma utilizando a injeção de dependências através do construtor
    // this.cursosService = cursoService;
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    //Nesse caso, ele está se inscrevendo nesse Evento que é criado no Service, e será notificado quando o atributo emitir algo
    CursosService.criouNovoCurso.subscribe((curso) => this.cursos.push(curso));
  }
}
