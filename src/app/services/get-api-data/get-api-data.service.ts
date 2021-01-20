import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

export enum ENDPOINTS {
  Login = '/auth/',
  Sobre = '/sobre/',
  ParagrafosDescricao = '/paragrafos-descricao/',
  RedesSociais = '/redes-sociais/',
  Experiencia = '/experiencia/',
  Educacao = '/educacao/',
  ProjetosEducacao = '/projetos-educacao/',
  Habilidades = '/habilidades/',
  Portfolio = '/portfolio/'
}

@Injectable({
  providedIn: 'root'
})
export class GetApiDataService {

  private API_URL = environment.api_url;

  constructor(private http: HttpClient) { }

  public get_url(endpoint: ENDPOINTS): string {
    return this.API_URL + endpoint;
  }

  public get_data_public(endpoint: ENDPOINTS, filter?: string, value?: string): Observable<object> {
    let filterQuery = '';
    if (filter) {
      filterQuery = '?' + filter + '=' + value;
    }
    return this.http.get(this.get_url(endpoint) + filterQuery);
  }

}
