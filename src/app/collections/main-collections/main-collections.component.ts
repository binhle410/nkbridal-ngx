import { Component, OnInit } from '@angular/core';
import { MAINCOLLECTIONS } from '../mock-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-collections',
  templateUrl: './main-collections.component.html',
  styleUrls: ['./main-collections.component.scss']
})
export class MainCollectionsComponent implements OnInit {
  lists = MAINCOLLECTIONS;
  constructor(private route: Router) { }

  ngOnInit() {
    
  }

}
