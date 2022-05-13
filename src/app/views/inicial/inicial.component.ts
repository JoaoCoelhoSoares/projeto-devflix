import { Component, OnInit } from '@angular/core';
import { ApiFilmesService } from 'src/app/services/api-filmes.service';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.scss']
})
export class InicialComponent implements OnInit {

  public respostaApi: any;
  public filmesPopular: any;
  public top3 = [];
  public indiceFilme = 0;
  public paginaCarregada: boolean = false;

  constructor(private api: ApiFilmesService) { }

  async ngOnInit() {
    this.dadosFilme();

  }

  async dadosFilme() {
    this.respostaApi = await this.api.chamadaApi('297761');
    this.filmesPopular = await this.api.chamadaApiPopulares();
    this.top3 = this.filmesPopular.results.slice(0, 3);

    console.log(this.respostaApi)
    console.log(this.filmesPopular)
    console.log(this.top3)

    this.paginaCarregada = true;
  }

  proximoFilme() {
    if (this.indiceFilme == 2) {
      this.indiceFilme = 0;
    } else {
      this.indiceFilme++;
    }
  }

  filmeAnterior() {
    if (this.indiceFilme == 0) {
      this.indiceFilme = 2;
    } else {
      this.indiceFilme--;
    }
  }

}
