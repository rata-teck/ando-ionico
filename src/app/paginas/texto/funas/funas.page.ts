import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funas',
  templateUrl: './funas.page.html',
  styleUrls: ['./funas.page.scss'],
})
export class FunasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public funa : Array<string> = [
    'Funa a Dan Shneider por acoso sexual y abuso de poder',
    'Funa a Coca Cola por gasto indiscriminado de agua',
    'Funa a Lipigas, Gasco y Abastible por colusión',
    'Funa a Apple por eliminar el cargador incluido de iPhone'
  ];

}
