import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // AboutUsComponent,
    // HeaderComponent,
    // NavbarComponent,
    FooterComponent,
    // PromFormalDressComponent,
    // LoginComponent,
    // WeddingDressesComponent,
    // BridesmaidDressComponent,
    // ProductsComponent,
    // MainCollectionsComponent,
    // ObjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
