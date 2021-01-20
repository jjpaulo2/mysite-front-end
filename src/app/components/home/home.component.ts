import { GetApiDataService, ENDPOINTS } from './../../services/get-api-data/get-api-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sobre: any;
  paragrafos: any;
  redesSociais: any;

  constructor(private api: GetApiDataService) { }

  ngOnInit(): void {
    this.api.get_data_public(ENDPOINTS.Sobre)
        .subscribe((data) => {
          console.log(data);
          this.sobre = data[0];
        });

    this.api.get_data_public(ENDPOINTS.ParagrafosDescricao)
        .subscribe((data) => {
          // console.log(data);
          this.paragrafos = data;
          this.paragrafos.reverse();
        });

    this.api.get_data_public(ENDPOINTS.RedesSociais)
        .subscribe((data) => {
          // console.log(data);
          this.redesSociais = data;
        });
  }

}
