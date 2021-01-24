import { Component, OnInit } from '@angular/core';
import { ReloadService } from '../../services/reload/reload.service';
import { GetApiDataService, ENDPOINTS } from '../../services/get-api-data/get-api-data.service';

@Component({
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  sobre: any = { 
    nome: 'João Paulo', 
    sobrenome: 'Carvalho', 
    foto: '../../../assets/user-default.png'
  };
  paragrafos: any;
  education: any;
  experience: any;
  skills: any;

  downloadStatus = 0;

  date = new Date();
  months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

  constructor(private api: GetApiDataService,
              private reload: ReloadService) { }

  ngOnInit(): void {
    this.get_paragrafos();
    this.get_about();
    this.get_education();
    this.get_experience();
    this.get_skills();
  }

  get_about(): any {
    this.api.get_data_public(ENDPOINTS.Sobre)
        .subscribe((data) => {
          // console.log(data);
          this.sobre = data[0];
          this.updateDownloadStatus();
        }, (error) => {
          this.reload.newError('Erro ao tentar obter informações. Tentando novamente...', () => {
            this.get_about();
          });
        });
  }

  get_paragrafos(): any {
    this.api.get_data_public(ENDPOINTS.ParagrafosDescricao)
        .subscribe((data) => {
          // console.log(data);
          this.paragrafos = data;
          this.updateDownloadStatus();
        }, (error) => {
          this.reload.newError('Erro ao tentar obter paragrafos do autor. Tentando novamente...', () => {
            this.get_paragrafos();
          });
        });
  }

  get_education(): any {
    this.api.get_data_public(ENDPOINTS.Educacao)
        .subscribe((data) => {
          // console.log(data);
          this.education = data;
          this.education.reverse();
          this.updateDownloadStatus();
        }, (error) => {
          this.reload.newError('Erro ao tentar obter formações. Tentando novamente...', () => {
            this.get_education();
          });
        });
  }

  get_experience(): any {
    this.api.get_data_public(ENDPOINTS.Experiencia)
        .subscribe((data) => {
          // console.log(data);
          this.experience = data;
          this.experience.reverse();
          this.updateDownloadStatus();
        }, (error) => {
          this.reload.newError('Erro ao tentar obter experiências de trabalho. Tentando novamente...', () => {
            this.get_experience();
          });
        });
  }

  get_skills(): any {
    this.api.get_data_public(ENDPOINTS.Habilidades)
        .subscribe(data => {
          // console.log(data);
          this.skills = data;
          this.updateDownloadStatus();
        }, (error) => {
          this.reload.newError('Erro ao tentar obter habilidades. Tentando novamente...', () => {
            this.get_skills();
          });
        });
  }

  get_date(): string {
    return this.date.getDate() + ' de ' + this.months[this.date.getMonth()] + ' de ' + this.date.getFullYear();
  }

  get_time(): string {
    return this.date.getHours() + ':' + this.date.getMinutes();
  }

  updateDownloadStatus(): void {
    this.downloadStatus++;
    if (this.downloadStatus === 5) {
      setTimeout(() => {
        window.print();
      }, 1500);
    }
  }

}
