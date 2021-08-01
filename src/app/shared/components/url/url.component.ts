import { Component, Input, OnInit } from '@angular/core';
import { ILinkData } from '../../interfaces/link.interface';
import { LinkService } from '../../services/link.service';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent implements OnInit {
  @Input() url: ILinkData = {};

  constructor(private linkService: LinkService) { }

  ngOnInit(): void {
  }
  trash() {
    this.linkService.deleteLink(this.url.id).then((result: any) => {
      
      console.log('result', result)
    });
  }
}
