import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILinkData } from '../shared/interfaces/link.interface';
import { IUserData } from '../shared/interfaces/user.interface';
import { LinkService } from '../shared/services/link.service';
import { MenuService } from '../shared/services/menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: IUserData = {};
  registerLinkForm: FormGroup;
  links: ILinkData[] = [];

  constructor(private menuService: MenuService, private linkService: LinkService) {
    this.registerLinkForm = new FormGroup(
      {
        'url': new FormControl('', [Validators.required]),
        'name': new FormControl('', [Validators.required])
      }
    );

    this.menuService.setMenu({
      title: 'logout',
      url: 'logout'
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
  getLinks() {
    this.linkService.getLinks().then((links: any) => {
      this.links = links.name;
    });
  }
  setNewLink() {

    this.linkService.postLink({
      url: this.registerLinkForm.controls.url.value,
      name: this.registerLinkForm.controls.name.value
    }).then((link) => {
      this.links.push(link.name);
    })

  }
}
