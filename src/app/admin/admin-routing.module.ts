import { UncategorisedProductComponent } from './../collections/products/uncategorised/uncategorised.component';
import { UncategorisedComponent } from './../collections/uncategorised/uncategorised.component';
import { ContactUsComponent } from './../component/contact-us/contact-us.component';
import { AdminComponent } from './../layouts/admin/admin.component';
import { AuthGuard } from './../auth/auth.guard';
import { ObjectComponent } from '../collections/products/prom-formal-dress/object.component';
import { BridesmaidDressComponent } from './../collections/bridesmaid-dress/bridesmaid-dress.component';
import { PromFormalDressComponent } from './../collections/prom-formal-dress/prom-formal-dress.component';
import { WeddingDressesComponent } from './../collections/wedding-dresses/wedding-dresses.component';
import { ProductsComponent } from './../collections/products/products.component';
import { MainCollectionsComponent } from './../collections/main-collections/main-collections.component';
import { AboutUsComponent } from './../component/about-us/about-us.component';
import { HomeComponent } from './../component/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { WeddingDressesProductComponent } from '../collections/products/wedding-dresses/wedding-dresses.component';
import { BridesmaidProductComponent } from '../collections/products/bridesmaid-product/bridesmaid-product.component';
import { AdminGuard } from './../auth/admin.guard';
import { ReturnExchangeComponent } from '../component/return-exchange/return-exchange.component';
import { RealPeopleComponent } from '../collections/real-people/real-people.component';
import { RealPeopleProductComponent } from '../collections/products/real-people-product/real-people-product.component';
const adminRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,

  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'about-us', component: AboutUsComponent
  },
  {
    path: 'return-exchange', component: ReturnExchangeComponent
  },
  {
    path: 'contact-us', component: ContactUsComponent
  },
  {
    path: 'collections', component: MainCollectionsComponent
  },
  { path: 'collections/wedding', component: WeddingDressesComponent },
  { path: 'collections/formal', component: PromFormalDressComponent },
  { path: 'collections/bridesmaid', component: BridesmaidDressComponent },
  { path: 'collections/special-offers', component: UncategorisedComponent },
  {path: 'collections/rprs', component: RealPeopleComponent},
  {
    path: 'products', component: MainCollectionsComponent
  },
  { path: 'products/special-offers/:id', component: UncategorisedProductComponent },
  { path: 'products/formal/:id', component: ObjectComponent },
  { path: 'products/wedding/:id', component: WeddingDressesProductComponent },
  { path: 'products/bridesmaid/:id', component: BridesmaidProductComponent },
  {path: 'products/rprs/:id', component: RealPeopleProductComponent},
  {
    path: 'home/upload',
    component: AdminComponent,
    canActivate: [AdminGuard],
  },{
    path: 'home/upload/:id',
    component: AdminComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
