import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendias',
  templateUrl: './vendias.page.html',
  styleUrls: ['./vendias.page.scss'],
})
export class VendiasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public vendia : Array<string> = ['/assets/img/vendia-01.jpg', '/assets/img/vendia-02.jpg', '/assets/img/vendia-03.webp', '/assets/img/vendia-04.jpg', '/assets/img/vendia-05.webp'];

}
