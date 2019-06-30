import { ApiServiceService } from './../../../services/api-service.service';
import { ListService } from './../../../list.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { Info } from '../../info-property';
import { Location } from '@angular/common';
@Component({
  selector: 'app-uncategorised',
  templateUrl: './uncategorised.component.html',
  styleUrls: ['./uncategorised.component.scss']
})

export class UncategorisedProductComponent implements OnInit {
  @Output()uncategorised: Info;
  routeUncategorised = 'special-offers';
  constructor(private route: ActivatedRoute, private listService: ListService, private location: Location,private apiService: ApiServiceService) { }
  ngOnInit() {
    this.getUncategorised();
  }
  getUncategorised(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getInfo(id,this.routeUncategorised)
      .subscribe(uncategorisedGet => this.uncategorised = uncategorisedGet)
  }

}
