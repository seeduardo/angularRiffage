import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RiffsComponent } from './riffs/riffs.component';
import { RiffComponent } from './riff/riff.component';
import { RiffService } from './service/riff.service';
import { AddRiffModelComponent } from './add-riff-model/add-riff-model.component';

@NgModule({
  declarations: [
    AppComponent,
    RiffsComponent,
    RiffComponent,
    AddRiffModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RiffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
