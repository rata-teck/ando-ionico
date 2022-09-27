import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'paginas/texto/funas',
    loadChildren: () => import('./paginas/texto/funas/funas.module').then( m => m.FunasPageModule)
  },
  {
    path: 'paginas/texto/comentarios',
    loadChildren: () => import('./paginas/texto/comentarios/comentarios.module').then( m => m.ComentariosPageModule)
  },
  {
    path: 'paginas/texto/chistes',
    loadChildren: () => import('./paginas/texto/chistes/chistes.module').then( m => m.ChistesPageModule)
  },
  {
    path: 'paginas/texto/noticias',
    loadChildren: () => import('./paginas/texto/noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'paginas/imagenes/comida',
    loadChildren: () => import('./paginas/imagenes/comida/comida.module').then( m => m.ComidaPageModule)
  },
  {
    path: 'paginas/imagenes/memes',
    loadChildren: () => import('./paginas/imagenes/memes/memes.module').then( m => m.MemesPageModule)
  },
  {
    path: 'paginas/imagenes/vendias',
    loadChildren: () => import('./paginas/imagenes/vendias/vendias.module').then( m => m.VendiasPageModule)
  },
  {
    path: 'paginas/imagenes/shitposting',
    loadChildren: () => import('./paginas/imagenes/shitposting/shitposting.module').then( m => m.ShitpostingPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
