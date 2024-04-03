import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
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
  }
}
