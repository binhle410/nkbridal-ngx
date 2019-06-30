import { AuthService } from './../../auth/auth.service';
import { ApiServiceService } from './../../services/api-service.service';
import { Info } from './../info-property';
import { Component, OnInit } from '@angular/core';
import { WEDDING } from '../mock-list';
import { ListService } from 'src/app/list.service';

@Component({
  selector: 'app-wedding-dresses',
  templateUrl: './wedding-dresses.component.html',
  styleUrls: ['./wedding-dresses.component.scss']
})
export class WeddingDressesComponent implements OnInit {
  route = 'Wedding'
  quickView: Info;
  title = "Wedding Dresses"
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
