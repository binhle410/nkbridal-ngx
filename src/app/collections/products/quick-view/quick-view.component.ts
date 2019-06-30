import { ApiServiceService } from './../../../services/api-service.service';
import { Info } from './../../info-property';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
  @Input() info = new Info;
  @Input() thumbImg;
  get;
  constructor(private service: ApiServiceService) { }

  ngOnInit() {
    this.get = document.getElementsByClassName('image-indicator')

  }
}
