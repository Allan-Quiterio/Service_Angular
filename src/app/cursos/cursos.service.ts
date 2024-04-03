import { Injectable } from '@angular/core';

//Para utilizar a injeção de dependências é necessário utilizar o decorator Injectable
@Injectable()
export class CursosService {
  private cursos = ['Angular', 'React', 'Vue'];
  constructor() {
    console.log('Executou o Service');
  }
  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
  }
}
