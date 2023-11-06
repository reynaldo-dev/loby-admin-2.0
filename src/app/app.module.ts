import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PrimengModule } from './primeng/primeng.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
     declarations: [AppComponent],
     imports: [
          BrowserModule,
          AppRoutingModule,
          PrimengModule,
          BrowserAnimationsModule,
          HttpClientModule,
     ],
     providers: [],
     bootstrap: [AppComponent],
})
export class AppModule {}
