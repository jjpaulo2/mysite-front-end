import { ReloadService } from './../../services/reload/reload.service';
import { GetApiDataService, ENDPOINTS } from './../../services/get-api-data/get-api-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: any;

  constructor(private api: GetApiDataService,
              private reload: ReloadService
              ) { }

  ngOnInit(): void {
    this.get_skills();
  }

  get_skills(): any {
    this.api.get_data_public(ENDPOINTS.Habilidades)
        .subscribe(data => {
          // console.log(data);
          this.skills = data;
        }, (error) => {
          this.reload.newError('Erro ao tentar obter habilidades. Tentando novamente...', () => {
            this.get_skills();
          });
        });
  }

}
