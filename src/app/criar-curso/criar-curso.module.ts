import { NgModule } from '@angular/core';

import { CriarCursoComponent } from './criar-curso.component';
import { AppRoutingModule } from '../app-routing.module';
import { CursosService } from '../cursos/cursos.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CriarCursoComponent],
  imports: [CommonModule, AppRoutingModule],
  // providers: [CursosService],
  exports: [CriarCursoComponent],
})
export class CriarCursoModule {}
