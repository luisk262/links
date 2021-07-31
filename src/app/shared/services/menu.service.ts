import { Injectable } from '@angular/core';
import { MENU_DATA } from '../constants/menu';
import { IMenuData } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menu: IMenuData = MENU_DATA;

  constructor() { }

  setMenu(menu: IMenuData) {
    this.menu = menu;
  }

  get getMenu(): IMenuData {
    return this.menu;
  }
}
