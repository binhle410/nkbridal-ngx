import { ApiServiceService } from './../../../services/api-service.service';
import { ListService } from '../../../list.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import { Info } from '../../info-property';
import { Location } from '@angular/common';
@Component({
  selector: 'bridesmaid-product',
  templateUrl: './bridesmaid-product.component.html',
  styleUrls: ['./bridesmaid-product.component.scss']
})
export class BridesmaidProductComponent implements OnInit {
  @Output()bride: Info;
  routeBride = 'Bridesmaid';
  constructor(private route: ActivatedRoute, private listService: ListService, private location: Location,private apiService: ApiServiceService) { }
  ngOnInit() {
    this.getBride();
  }
  getBride(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getInfo(id,this.routeBride)
      .subscribe(bride => this.bride = bride)
  }
}
