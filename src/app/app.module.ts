import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RiffsComponent } from './riffs/riffs.component';
import { RiffComponent } from './riff/riff.component';

@NgModule({
  declarations: [
    AppComponent,
    RiffsComponent,
    RiffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
