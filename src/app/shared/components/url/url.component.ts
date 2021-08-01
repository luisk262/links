import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ILinkData } from '../../interfaces/link.interface';
import { ILoginData } from '../../interfaces/login.interface';
import { LinkService } from '../../services/link.service';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent implements OnInit {

  @Input() url: ILinkData = {};
  @Output() deleteLink: EventEmitter<ILoginData> = new EventEmitter();

  constructor(private linkService: LinkService) { }

  ngOnInit(): void {
  }

  trash() {
    this.linkService.deleteLink(this.url.id).then((result: any) => {
      console.log('---->[delete][Respone]', result);
      this.deleteLink.emit(result);
    });
  }

}
