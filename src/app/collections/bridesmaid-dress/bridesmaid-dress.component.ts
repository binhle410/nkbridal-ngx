import { AuthService } from './../../auth/auth.service';
import { ApiServiceService } from './../../services/api-service.service';
import { ListService } from './../../list.service';
import { Info } from './../info-property';
import { Component, OnInit } from '@angular/core';
import { BRIDESMAIDS } from '../mock-list';

@Component({
  selector: 'app-bridesmaid-dress',
  templateUrl: './bridesmaid-dress.component.html',
  styleUrls: ['./bridesmaid-dress.component.scss']
})
export class BridesmaidDressComponent implements OnInit {
  route = 'bridesmaid'
  quickView: Info;
  title = "Bridesmaid Dress";
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
