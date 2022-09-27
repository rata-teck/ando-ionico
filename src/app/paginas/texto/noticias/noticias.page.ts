import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public noticia : Array<string> = [
    'Wenaaaa! A partir del 1 de octubre, la mascarilla dejará de ser obligatoria',
    '"Wey ya!" Mexico sufre terremoto de magnitud 7.6, otra vez un 19 de septiembre',
    'Pero wn! Gabriel Boric insulta a Carabineros y defiende el nombre de Allende ante la ONU',
    'Tengo miedo! La selección chilena se enfrentará a Marruecos el viernes a las 16 horas',
    'Panas! Empresas de videojuegos muestran su apoyo a Rockstar Games presentando sus proyectos en desarrollo'
  ];

}
