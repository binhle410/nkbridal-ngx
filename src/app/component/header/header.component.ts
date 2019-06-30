import { ApiServiceService } from './../../services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/collections/info-property';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sectionModels: Info[]
  constructor(private service:ApiServiceService) { }

  ngOnInit() {
    this.getShowSlide();
  }

  getShowSlide() {
    this.service.getSlideInfo()
      .subscribe(res => {
        this.sectionModels = res;
      })
  }

}
