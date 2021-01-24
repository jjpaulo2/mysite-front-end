import { ReloadService } from '../../../../services/reload/reload.service';
import { GetApiDataService, ENDPOINTS } from '../../../../services/get-api-data/get-api-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolio: any;

  constructor(private api: GetApiDataService,
              private reload: ReloadService
              ) { }

  ngOnInit(): void {
    this.get_portfolio();
  }

  get_portfolio(): any {
    this.api.get_data_public(ENDPOINTS.Portfolio)
        .subscribe((data) => {
          // console.log(data);
          this.portfolio = data;
          this.portfolio.reverse();
        }, (error) => {
          this.reload.newError('Erro ao tentar obter portfolio. Tentando novamente...', () => {
            this.get_portfolio();
          });
        });
  }

}
