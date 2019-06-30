import { AuthService } from './../../auth/auth.service';
import { ApiServiceService } from './../../services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { Info } from '../info-property';
import { ListService } from 'src/app/list.service';

@Component({
  selector: 'app-prom-formal-dress',
  templateUrl: './prom-formal-dress.component.html',
  styleUrls: ['./prom-formal-dress.component.scss']
})
export class PromFormalDressComponent implements OnInit {
  route = 'Formal';
  formalQuickView: Info;
  idFormal;
  title = "Formal Dress"
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


  /*======/.FORMAL ======*/
}
