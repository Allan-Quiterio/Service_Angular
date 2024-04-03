import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from '../shared/log.service';

//Para utilizar a injeção de dependências é necessário utilizar o decorator Injectable
@Injectable()
export class CursosService {
  //Dessa forma convencional, só vai funcionar para componentes que utilizam uma mesma instância de Service
  emitirCursoCriado = new EventEmitter<string>();

  // Já dessa outra forma, componentes que usam instâncias diferentes poderão acessar esse evento
  static criouNovoCurso = new EventEmitter<string>();

  private cursos = ['Angular', 'React', 'Vue'];

  //Fazendo a Injeção de dependências do Service Log, dentro desse outro Service
  constructor(private logService: LogService) {
    console.log('Executou o Service');
  }
  getCursos() {
    this.logService.consoleLog('Obtendo Lista de cursos');
    return this.cursos;
  }

  addCurso(curso: string) {
    this.logService.consoleLog('Criando um novo curso' + curso);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
