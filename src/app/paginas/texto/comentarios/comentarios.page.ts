import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public comentario : Array<string> = [
    'Ya era hora que quitaran el uso obligatorio de mascarillas, dejé de usar lentes y llego to ahogao a casa con esa wea',
    'Oe yapo merluzo ql, teni la pura caga en el país y queri seguir',
    'La sirenita original era demasiado linda para ser una sirena, esta negra es más a medida'
  ];

}
