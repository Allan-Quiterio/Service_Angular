import { EventEmitter, Injectable } from '@angular/core';

//Para utilizar a injeção de dependências é necessário utilizar o decorator Injectable
@Injectable()
export class CursosService {
  //Dessa forma convencional, só vai funcionar para componentes que utilizam uma mesma instância de Service
  emitirCursoCriado = new EventEmitter<string>();

  // Já dessa outra forma, componentes que usam instâncias diferentes poderão acessar esse evento
  static criouNovoCurso = new EventEmitter<string>();

  private cursos = ['Angular', 'React', 'Vue'];
  constructor() {
    console.log('Executou o Service');
  }
  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
