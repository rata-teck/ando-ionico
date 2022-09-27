import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.page.html',
  styleUrls: ['./memes.page.scss'],
})
export class MemesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public meme : Array<string> = ['/assets/img/meme-01.jpg', '/assets/img/meme-02.jpg', '/assets/img/meme-03.jpeg', '/assets/img/meme-04.webp', '/assets/img/meme-05.webp', '/assets/img/meme-06.jpg'];

}
