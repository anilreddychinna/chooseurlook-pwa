import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MoreComponent } from './components/more/more.component';
import { MaterialModule } from './material.module';

import { MatIconModule } from "@angular/material/icon";
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeOneComponent } from './components/home-one/home-one.component';
import { CFooterComponent } from './components/c-footer/c-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MoreComponent,
    ProductsComponent,
    LoginComponent,
    ContactComponent,
    HomeOneComponent,
    CFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerImmediately'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports : [MaterialModule, MatIconModule]
})
export class AppModule { }
