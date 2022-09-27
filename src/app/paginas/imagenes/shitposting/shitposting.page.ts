import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shitposting',
  templateUrl: './shitposting.page.html',
  styleUrls: ['./shitposting.page.scss'],
})
export class ShitpostingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public shitpost : Array<string> = ['/assets/img/shitpost-01.jpeg', '/assets/img/shitpost-02.jpg', '/assets/img/shitpost-03.webp', '/assets/img/shitpost-04.webp', '/assets/img/shitpost-05.jpg'];
}
