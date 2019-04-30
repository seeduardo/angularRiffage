import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiffsComponent } from './riffs/riffs.component';
import { AddRiffTemplateComponent } from './add-riff-template/add-riff-template.component';
import { AddRiffModelComponent } from './add-riff-model/add-riff-model.component';
import { RiffDetailComponent } from './riff-detail/riff-detail.component'

const routes: Routes = [
  {path: '', component: RiffsComponent},
  {path: 'riffs', component: RiffsComponent},
  {path: 'add-riff-template', component: AddRiffTemplateComponent},
  {path: 'add-riff-model', component: AddRiffModelComponent},
  {path: 'riffs/:id', component: RiffDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
