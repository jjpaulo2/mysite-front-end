import { ReloadService } from '../../../../services/reload/reload.service';
import { GetApiDataService, ENDPOINTS } from '../../../../services/get-api-data/get-api-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  education: any;

  constructor(private api: GetApiDataService,
              private reload: ReloadService
              ) { }

  ngOnInit(): void {
    this.get_education();
  }

  get_education(): any {
    this.api.get_data_public(ENDPOINTS.Educacao)
        .subscribe((data) => {
          // console.log(data);
          this.education = data;
          this.education.reverse();
        }, (error) => {
          this.reload.newError('Erro ao tentar obter formações. Tentando novamente...', () => {
            this.get_education();
          });
        });
  }

}
