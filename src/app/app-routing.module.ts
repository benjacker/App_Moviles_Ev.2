import { NgModule } from '@angular/core'; 
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then(m => m.RecuperarPageModule)
  },
  {
    path: 'inside',
    loadChildren: () => import('./menu/inside/inside.module').then(m => m.InsidePageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./reg/registrar/registrar.module').then(m => m.RegistrarPageModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./error/error/error.module').then(m => m.ErrorPageModule)
  },
  {
    path: 'mantenedor',
    loadChildren: () => import('./admin/mantenedor/mantenedor.module').then(m => m.MantenedorPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: '**', // Ruta para manejar 404
    redirectTo: 'error' // Redirige a la página de error
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
