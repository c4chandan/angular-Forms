import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { FormService } from './form.service';
// import { FormsDemoComponent } from './Forms/forms-demo/forms-demo.component';
// import { PageNotFoundComponent } from './pageNotFound/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    routingModule,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
