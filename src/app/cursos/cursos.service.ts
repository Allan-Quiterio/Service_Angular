import { Injectable } from '@angular/core';

//Para utilizar a injeção de dependências é necessário utilizar o decorator Injectable
@Injectable()
export class CursosService {
  getCursos() {
    return ['Angular', 'React', 'Vue'];
  }
}
