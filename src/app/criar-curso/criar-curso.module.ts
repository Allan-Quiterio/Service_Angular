import { NgModule } from '@angular/core';

import { CriarCursoComponent } from './criar-curso.component';
import { AppRoutingModule } from '../app-routing.module';
import { CursosService } from '../cursos/cursos.service';
import { CommonModule } from '@angular/common';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [CriarCursoComponent, ReceberCursoCriadoComponent],
  imports: [CommonModule, AppRoutingModule],
  // providers: [CursosService],
  exports: [CriarCursoComponent],
})
export class CriarCursoModule {}
