import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialCustomModule} from './material-custom/material-custom.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PageCoverComponent } from './page-cover/page-cover.component';

@NgModule({
  declarations: [
    AppComponent,
    PageCoverComponent
  ],
  imports: [
    BrowserModule,
    MaterialCustomModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
