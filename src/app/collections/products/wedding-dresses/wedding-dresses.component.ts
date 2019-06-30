import { ApiServiceService } from './../../../services/api-service.service';
import { ListService } from '../../../list.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import { Info } from '../../info-property';
import { Location } from '@angular/common';
@Component({
  selector: 'wedding-product',
  templateUrl: './wedding-dresses.component.html',
  styleUrls: ['./wedding-dresses.component.scss']
})
export class WeddingDressesProductComponent implements OnInit {
  @Output()wedding: Info;
  routeWedding = 'wedding';
  constructor(private route: ActivatedRoute, private listService: ListService, private location: Location,private apiService: ApiServiceService) { }
  ngOnInit() {
    this.getWedding();
  }
  getWedding(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getInfo(id,this.routeWedding)
      .subscribe(wedding => this.wedding = wedding)
  }
}
