import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LinksComponent} from "./components/links/links.component";
import {ServicesComponent} from "./components/services/services.component";

const routes: Routes = [
  {
    path: 'links',
    component: LinksComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: '**',
    redirectTo: 'links'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
