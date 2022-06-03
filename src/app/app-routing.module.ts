import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/guard/auth.guard';
import { NotFoundComponent } from './_component/not-found/not-found.component';


const routes: Routes = [{
  path: '',
  loadChildren: () => import('./_module/public/public.module').then(m => m.PublicModule)
},
{
  path: 'privado',
  canActivate: [AuthGuard],
  canLoad: [AuthGuard],
  loadChildren: () => import('./_module/private/private.module').then(m => m.PrivateModule)
},
{
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
