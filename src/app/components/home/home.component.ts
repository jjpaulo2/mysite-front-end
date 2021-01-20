import { GetApiDataService, ENDPOINTS } from './../../services/get-api-data/get-api-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sobre: any = { foto: '../../../assets/user-default.png' };
  paragrafos: any;
  redesSociais: any;

  constructor(private api: GetApiDataService) { }

  ngOnInit(): void {
    this.get_paragrafos();
    this.get_redes_sociais();
    this.get_about();
  }

  get_about(): any {
    this.api.get_data_public(ENDPOINTS.Sobre)
        .subscribe((data) => {
          // console.log(data);
          this.sobre = data[0];
        }, (error) => {
          console.log('Erro ao tentar obter informações. Tentando novamente...');
          this.get_about();
        });
  }

  get_paragrafos(): any {
    this.api.get_data_public(ENDPOINTS.ParagrafosDescricao)
        .subscribe((data) => {
          // console.log(data);
          this.paragrafos = data;
          this.paragrafos.reverse();
        }, (error) => {
          console.log('Erro ao tentar obter paragrafos do autor. Tentando novamente...');
          this.get_paragrafos();
        });
  }

  get_redes_sociais(): any {
    this.api.get_data_public(ENDPOINTS.RedesSociais)
        .subscribe((data) => {
          // console.log(data);
          this.redesSociais = data;
        }, (error) => {
          console.log('Erro ao tentar obter redes sociais. Tentando novamente...');
          this.get_redes_sociais();
        });
  }

}
