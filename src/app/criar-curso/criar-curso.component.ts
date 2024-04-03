import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss'],
  providers: [CursosService], //Nesse caso, se quisermos uma instância separada só para esse componente, podemos adicionar o provider aqui também para o Serviço desejado
})
export class CriarCursoComponent implements OnInit {
  cursos = [''];

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

  // Então como o escopo do provider é local, apenas para esse component, ele será adicionado apenas nessa lista e não na lista do Cursos-component
  onAddCurso(curso: string) {
    this.cursosService.addCurso(curso);
  }
}
