import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RiffsComponent } from './riffs/riffs.component';
import { RiffComponent } from './riff/riff.component';
import { RiffService } from './service/riff.service';
import { AddRiffModelComponent } from './add-riff-model/add-riff-model.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AddRiffTemplateComponent } from './add-riff-template/add-riff-template.component';
import { LayoutModule } from './layout/layout.module';
import { RiffDetailComponent } from './riff-detail/riff-detail.component';
import { InMemoryRiffService } from './in-memory-riff.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    RiffsComponent,
    RiffComponent,
    AddRiffModelComponent,
    AddRiffTemplateComponent,
    RiffDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryRiffService)
  ],
  providers: [RiffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
