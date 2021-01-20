import { GetApiDataService, ENDPOINTS } from './../../services/get-api-data/get-api-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: any;

  constructor(private api: GetApiDataService) { }

  ngOnInit(): void {

    this.api.get_data_public(ENDPOINTS.Habilidades)
        .subscribe(data => {
          console.log(data);
          this.skills = data;
        });
  }

}
