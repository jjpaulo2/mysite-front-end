import { GetApiDataService, ENDPOINTS } from './../../services/get-api-data/get-api-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-experience',
  templateUrl: './job-experience.component.html',
  styleUrls: ['./job-experience.component.scss']
})
export class JobExperienceComponent implements OnInit {

  experience: any;

  constructor(private api: GetApiDataService) { }

  ngOnInit(): void {

    this.api.get_data_public(ENDPOINTS.Experiencia)
        .subscribe((data) => {
          console.log(data);
          this.experience = data;
          this.experience.reverse();
        });

  }

}
