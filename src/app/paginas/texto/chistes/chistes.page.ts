import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chistes',
  templateUrl: './chistes.page.html',
  styleUrls: ['./chistes.page.scss'],
})
export class ChistesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public chiste : Array<string> = [
    '(Invalido) Mira una araña! // (Ciego) Pisala!',
    '(Hombre) Puedo ir a donde quiera. // (Macaco) Vivo en una jaula pero puedo jalarmela en publico xd',
    '(Yo) Gatos ql, dejen dormir! // (Mi gato culiando a las 3 AM) Nyaaaah!',
    '(Profesor) Porque se rie joven? // (Yo imaginando que Antman entra al ano de Thanos y lo hace explotar desde adentro) No nada profe.'
  ];

}
