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
  getLinks() {
    this.linkService.getLinks().then((links:any) => {
      for(var i in links){
        console.log('---->',links[i])
      }
                
      links.forEach((link:any)=>{
        console.log('linkkk',link);
      });

      this.links = links;
      console.log('link--->',links);
      console.log('link--->',JSON.parse(JSON.stringify(links)));
    
      
      
    //console.log(JSON.parse(JSON.stringify(links)));
      //this.links = links;
    });
  }
  setNewLink() {
    const link: ILinkData = {
      url: '',
      name: 'dsad'

    }
    this.linkService.postLink(link).then((result) => {
      console.log('result', result);
    })

  }
}
