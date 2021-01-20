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
  private USER = {
    user: environment.user,
    password: environment.password
  }

  constructor(private http: HttpClient) { }

  public get_url(endpoint: ENDPOINTS): string {
    return this.API_URL + endpoint;
  }

  public get_token(): string {
    let token = null;

    this.http.post(this.get_url(ENDPOINTS.Login), {
      user: this.USER.user,
      password: this.USER.password
    }).subscribe((data: any) => {
      token = data.token;
    });

    return token;
  }

  public get_data(endpoint: ENDPOINTS, token: string): Observable<object> {
    return this.http.get(this.get_url(endpoint), {
      headers: {
        Authentication: 'Token ' + token
      }
    });
  }

  public get_data_public(endpoint: ENDPOINTS, filter?: string, value?: string): Observable<object> {
    let filterQuery = '';
    if (filter) {
      filterQuery = '?' + filter + '=' + value;
    }
    return this.http.get(this.get_url(endpoint) + filterQuery);
  }

}
