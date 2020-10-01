import { Component, OnInit } from '@angular/core';
import { routes } from '../../app-routing.module'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  routes = [
    {path: routes[1].path, name: 'Início'},
    {path: routes[2].path, name: 'Educação'},
    {path: routes[3].path, name: 'Experiência'},
    {path: routes[4].path, name: 'Habilidades'},
    {path: routes[5].path, name: 'Contato'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
