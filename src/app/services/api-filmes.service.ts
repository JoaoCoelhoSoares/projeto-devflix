import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiFilmesService {

  constructor(private http: HttpClient) { }

  public chamadaApi(codigoFilme: any) {
    return new Promise<any>((resolve) => {
      const data = this.http.get(`${environment.filmesApi}/${codigoFilme}?api_key=${environment.apiKey}`);
      data.subscribe(data => {
        resolve(data);
      })
    })
  }

  public chamadaApiPopulares() {
    return new Promise<any>((resolve) => {
      const data = this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${environment.apiKey}&language=en-US&page=1`);
      data.subscribe(data => {
        resolve(data);
      })
    })
  }

}
