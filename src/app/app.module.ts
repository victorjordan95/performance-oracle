import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [Http, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
