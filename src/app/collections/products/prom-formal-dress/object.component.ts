import { ApiServiceService } from './../../../services/api-service.service';
import { ListService } from './../../../list.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import { Info } from '../../info-property';
import { Location } from '@angular/common';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic/src/platform_providers';
@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {
  @Output() formal: Info;
  routeFormal = 'formal';
  constructor(private route: ActivatedRoute, private listService: ListService, private location: Location, private apiService: ApiServiceService) { }
  formalInfo;
  thumbFormal;
  indexCount;
  count;

  getFormal(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getInfo(id,this.routeFormal)
      .subscribe(formal => {
        this.formal = formal;
      })
  }

  ngOnInit() {
    this.getFormal();
  }


}
