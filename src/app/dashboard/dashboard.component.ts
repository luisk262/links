import { Component, OnInit } from '@angular/core';
import { MenuService } from '../shared/services/menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private menuService:MenuService) {
    this.menuService.setMenu({
      title: 'logout',
      url: '/'
    });
  }

  ngOnInit(): void {
  }

}
