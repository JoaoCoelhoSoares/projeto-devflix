import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialComponent } from './views/inicial/inicial.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuscaComponent } from './busca/busca.component';
import { FullComponent } from './_layouts/full/full.component';
import { ContentComponent } from './_layouts/content/content.component';
import { NotFoundComponent } from './_component/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    MenuComponent,
    BuscaComponent,
    FullComponent,
    ContentComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
