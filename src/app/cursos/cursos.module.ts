import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { CursosService } from './cursos.service';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [CursosComponent],
  imports: [CommonModule, AppRoutingModule],
  // providers: [CursosService],
  exports: [CursosComponent],
})
export class CursosModule {}
