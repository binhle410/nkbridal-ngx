import { PromFormalDressComponent } from './collections/prom-formal-dress/prom-formal-dress.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { WeddingDressesComponent } from './collections/wedding-dresses/wedding-dresses.component';
import { BridesmaidDressComponent } from './collections/bridesmaid-dress/bridesmaid-dress.component';
import { MainCollectionsComponent } from './collections/main-collections/main-collections.component';

const routes: Routes = [
  // {path:'home', component:HomeComponent},
  // {path:'', redirectTo: '/home', pathMatch:'full'},
  // {path:'about-us', component:AboutUsComponent},
  {path:'contact-us', component:ContactUsComponent},
  // {path:'collections/wedding-dresses', component: WeddingDressesComponent},
  // {path:'collections/prom-formal-dress', component: PromFormalDressComponent},
  // {path:'collections/bridesmaid-dress', component: BridesmaidDressComponent},
  // {path:'collections',component: MainCollectionsComponent},
  // {path:'products/:name',component: ObjectComponent},
  // {path:'products', component: MainCollectionsComponent},
  // {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
