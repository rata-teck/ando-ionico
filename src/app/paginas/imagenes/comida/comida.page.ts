import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.page.html',
  styleUrls: ['./comida.page.scss'],
})
export class ComidaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public comida : Array<string> = ['/assets/img/comida-01.jpg', '/assets/img/comida-02.jpg', '/assets/img/comida-03.jpg', '/assets/img/comida-04.jpg', '/assets/img/comida-05.jpg'];

}
