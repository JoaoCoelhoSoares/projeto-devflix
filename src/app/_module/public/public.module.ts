import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './_component/login/login.component';
import { EsqueciSenhaComponent } from './_component/esqueci-senha/esqueci-senha.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformarEmailComponent } from './_component/informar-email/informar-email.component';


@NgModule({
  declarations: [
    LoginComponent,
    EsqueciSenhaComponent,
    InformarEmailComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
