import { GetApiDataService, ENDPOINTS } from './../../services/get-api-data/get-api-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private dados: GetApiDataService) { }

  ngOnInit(): void {
    const token = this.dados.get_token();

    const dados = this.dados.get_data(ENDPOINTS.Habilidades, token);
    dados.subscribe(data => {
      console.log(data);
    });
  }

}
