import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Shitposting', url: '/paginas/imagenes/shitposting', icon: 'image' },
    { title: 'Vendias', url: '/paginas/imagenes/vendias', icon: 'image' },
    { title: 'Memes de actualidad', url: '/paginas/imagenes/memes', icon: 'image' },
    { title: 'Fotocomida', url: '/paginas/imagenes/comida', icon: 'Image' },
    { title:'Noticias', url:'/paginas/texto/noticias', icon:'text'},
    { title:'Chistes', url:'/paginas/texto/chistes', icon:'text'},
    { title:'Comentarios', url:'/paginas/texto/comentarios', icon:'text'},
    { title:'Funas', url:'/paginas/texto/funas', icon:'text'},
  ];
  constructor() {}
}
