import { AuthService } from './../../auth/auth.service';
import { Info } from './../../collections/info-property';
import { ApiServiceService } from './../../services/api-service.service';
import { SECTIONSLIDE } from './../../collections/mock-list';
import { SECTIONMODEL, SECTIONSTYLE } from 'src/app/collections/mock-list';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import 'bootstrap'
import { NguCarouselConfig } from '@ngu/carousel';
import { NguButton, CarouselInterval, Transfrom } from '@ngu/carousel/lib/ngu-carousel/ngu-carousel';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})



export class HomeComponent implements OnInit {

  sectionModels;
  sectionStyles;
  sectionSlides: Info[];
  sectionEnd;

  quickView: Info[];
  routeFormal = 'formal';
  thumbImg;
  ngOnInit() {
    this.showFeature();
    // ==================
    // ==================
    this.getShowCategories();
    // ==================
    this.getEndHome();
  }
  constructor(private service: ApiServiceService, private adminControls: AuthService) {
  }
  showFeature() {
    this.service.getALL()
      .subscribe(res => {
        this.sectionSlides = res;

      })
  }
  openQuickView(id) {
    this.service.getInfoFromId(id)
      .subscribe(res => this.quickView = res)
    this.service.getThumb(id)
      .subscribe(res => this.thumbImg = res)
  }
  /*  */

  // Show Product
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    navText: ['<a class="carousel-control-prev text-dark mb-5 fas fa-angle-left fa-2x"></a>', '<a class="carousel-control-next text-dark mb-5 fas fa-angle-right fa-2x"></a>'],
    responsive: {
      1024: {
        items: 5,
      },
      768: {
        items: 4
      }
    },
    nav: true
  }
  // Head Slide

  // Show Categories
  getShowCategories() {
    this.service.getCategoriesShow()
      .subscribe(res => {
        this.sectionStyles = res;
      })
  }
  // Footer
  getEndHome() {
    this.service.getEndHome()
      .subscribe(res => {
        this.sectionEnd = res[0]
      })
  }
}

