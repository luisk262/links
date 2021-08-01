import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MenuService } from '../../services/menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(public menuService: MenuService, private router: Router, private auth:AuthService) { }

  navigate() {
    if (this.menuService.getMenu.url == 'logout') {
      this.auth.closeSession();
      this.router.navigate(['/']);
    } else {
      this.router.navigate([this.menuService.getMenu.url]);
    }
  }
}
