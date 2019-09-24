import { ApiServiceService } from './../../../services/api-service.service';
import { Info } from './../../info-property';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
  loading = true;
  @Input() info: Info;
  thumb;
  get;
  constructor(
    private route: ActivatedRoute,
    private service: ApiServiceService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getThumb();

    // 
    this.get = document.getElementsByClassName('image-indicator')
  }

  getThumb() {
    const id_product = +this.route.snapshot.paramMap.get('id');
    this.service.getThumb(id_product)
      .subscribe(res => {
        this.thumb = res;
        setTimeout(() => {
          this.loading = false;
        }, 3000)
        for (let img of this.thumb) {
          this.http.get(img.image)
            .subscribe(res => {
            }, err => {
              if (err.status === 404) {
                img.image = '/assets/img-process/404.png';
              }
              if (err.status === 403) {
                img.image = '/assets/img-process/404.png';
              }
            })
        }
        console.log(this.thumb)
      })
  }

}
