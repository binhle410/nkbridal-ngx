import { ApiServiceService } from './../../../services/api-service.service';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/list.service';
import { Component, OnInit, Output } from '@angular/core';
import { Info } from '../../info-property';
import { Location } from '@angular/common';

@Component({
  selector: 'app-real-people-product',
  templateUrl: './real-people-product.component.html',
  styleUrls: ['./real-people-product.component.scss']
})
export class RealPeopleProductComponent implements OnInit {

  @Output() rprs: Info;
  routeRpRs = 'rprs';
  constructor(private route: ActivatedRoute, private listService: ListService, private location: Location, private apiService: ApiServiceService) { }
  ngOnInit() {
    this.getWedding();
  }
  getWedding(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getInfo(id, this.routeRpRs)
      .subscribe(rprs => this.rprs =rprs)
  }

}
