import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from 'src/app/views/inicial/inicial.component';
import { FullComponent } from 'src/app/_layouts/full/full.component';

const routes: Routes = [{
  path: '',
  component: FullComponent,
  children: [
    { path: '', component: InicialComponent },
    { path: 'home', component: InicialComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
