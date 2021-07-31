import { Component, OnInit } from '@angular/core';
import { IUserData } from '../shared/interfaces/user.interface';
import { LinkService } from '../shared/services/link.service';
import { MenuService } from '../shared/services/menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: IUserData ={};

  constructor(private menuService: MenuService, private linkService: LinkService) {
    this.menuService.setMenu({
      title: 'logout',
      url: '/'
    });
  }

  ngOnInit(): void {
    this.getUser();
    this.getLinks();
  }
  getUser() {
    this.linkService.getUserInfo().then((user) => {
      this.user = user;
    })
  }
  getLinks(){
    this.linkService.getLinks().then((links)=>{
      console.log('links---->',links);
    })
  }

}
