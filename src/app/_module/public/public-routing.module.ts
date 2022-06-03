import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from 'src/app/_layouts/content/content.component';
import { EsqueciSenhaComponent } from './_component/esqueci-senha/esqueci-senha.component';
import { InformarEmailComponent } from './_component/informar-email/informar-email.component';
import { LoginComponent } from './_component/login/login.component';

const routes: Routes = [{
  path: '',
  component: ContentComponent,
  children: [
    { path: '', component: InformarEmailComponent },
    { path: 'home', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'esquecisenha', component: EsqueciSenhaComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
