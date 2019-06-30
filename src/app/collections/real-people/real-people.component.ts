import { ApiServiceService } from './../../services/api-service.service';
import { AuthService } from './../../auth/auth.service';
import { ListService } from 'src/app/list.service';
import { Component, OnInit } from '@angular/core';
import { Info } from '../info-property';

@Component({
  selector: 'app-real-people',
  templateUrl: './real-people.component.html',
  styleUrls: ['./real-people.component.scss']
})
export class RealPeopleComponent implements OnInit {
  route = 'RPRS';
  formalQuickView: Info;
  idFormal;
  title = "real people, real story"
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
