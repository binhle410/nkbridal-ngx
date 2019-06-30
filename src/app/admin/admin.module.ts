import { BrowserModule } from '@angular/platform-browser';
import { MainLayoutComponent } from './../collections/main-layout/main-layout.component';
import { Http, HttpModule } from '@angular/http';
import { UncategorisedProductComponent } from './../collections/products/uncategorised/uncategorised.component';
import { UncategorisedComponent } from './../collections/uncategorised/uncategorised.component';
import { ContactUsComponent } from './../component/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './../layouts/admin/admin.component';
import { ReturnExchangeComponent } from '../component/return-exchange/return-exchange.component';
import { HeaderComponent } from './../component/header/header.component';
import { NavbarComponent } from './../component/navbar/navbar.component';
import { AboutUsComponent } from './../component/about-us/about-us.component';
import { ProductsComponent } from './../collections/products/products.component';
import { MainCollectionsComponent } from './../collections/main-collections/main-collections.component';
import { HomeComponent } from './../component/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectComponent } from '../collections/products/prom-formal-dress/object.component';
import { BridesmaidDressComponent } from './../collections/bridesmaid-dress/bridesmaid-dress.component';
import { PromFormalDressComponent } from './../collections/prom-formal-dress/prom-formal-dress.component';
import { WeddingDressesComponent } from './../collections/wedding-dresses/wedding-dresses.component';
import { AdminRoutingModule } from './admin-routing.module';
import { WeddingDressesProductComponent } from '../collections/products/wedding-dresses/wedding-dresses.component';
import { BridesmaidProductComponent } from '../collections/products/bridesmaid-product/bridesmaid-product.component';
import {MDBBootstrapModule, DropdownModule} from 'angular-bootstrap-md';
import 'aws-sdk';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ViewProductComponent } from '../collections/products/view-product/view-product.component';
import { QuickViewComponent } from '../collections/products/quick-view/quick-view.component';
import { RealPeopleComponent } from '../collections/real-people/real-people.component';
import { RouterModule } from '@angular/router';
import { RealPeopleProductComponent } from '../collections/products/real-people-product/real-people-product.component';
@NgModule({
  declarations: [
    ObjectComponent,
    BridesmaidDressComponent,
    BridesmaidProductComponent,
    PromFormalDressComponent,
    WeddingDressesComponent,
    WeddingDressesProductComponent,
    HomeComponent,
    MainCollectionsComponent,
    ProductsComponent,
    AboutUsComponent,
    NavbarComponent,
    HeaderComponent,
    QuickViewComponent,
    ViewProductComponent,
    AdminComponent,
    ReturnExchangeComponent,
    ContactUsComponent,
    UncategorisedComponent,
    UncategorisedProductComponent,
    MainLayoutComponent,
    RealPeopleComponent,
    RealPeopleProductComponent
  ],
  imports: [
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    CommonModule,
    AdminRoutingModule,
    CarouselModule,
    MDBBootstrapModule,
    DropdownModule,
    NgxPaginationModule,
    HttpClientJsonpModule
  ]
})
export class AdminModule { }