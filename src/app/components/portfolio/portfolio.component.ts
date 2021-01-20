import { GetApiDataService, ENDPOINTS } from './../../services/get-api-data/get-api-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolio: any;

  constructor(private api: GetApiDataService) { }

  ngOnInit(): void {

    this.api.get_data_public(ENDPOINTS.Portfolio)
        .subscribe((data) => {
          // console.log(data);
          this.portfolio = data;
          this.portfolio.reverse();
        });
  }

}
