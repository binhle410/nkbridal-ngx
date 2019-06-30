import { ApiServiceService } from './../../services/api-service.service';
import { AuthService } from './../../auth/auth.service';
import { ListService } from 'src/app/list.service';
import { Component, OnInit } from '@angular/core';
import { Info } from '../info-property';

@Component({
  selector: 'app-uncategorised',
  templateUrl: './uncategorised.component.html',
  styleUrls: ['./uncategorised.component.scss']
})
export class UncategorisedComponent implements OnInit {
  route = 'Special-offers';
  uncategorisedQuickView: Info;
  idFormal;
  title = "Special Offers"
  lists: Info[];
  thumbImg;
  adminIsLoggedIn = false;
  fadeOut = false;
  p: number = 1;
  collection: any[];
  constructor(private service: ListService, private auth: AuthService, private apiService: ApiServiceService) {
    this.adminIsLoggedIn = this.auth.isLoggedInAdmin;
  }
  ngOnInit() {


  }


}
