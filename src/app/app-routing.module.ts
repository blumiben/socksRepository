import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SocksComponent} from './socks/socks.component'

const routes: Routes = [
  { path: '', redirectTo: 'socks', pathMatch: 'full' },
  { path: 'socks', component: SocksComponent, data: { title: 'גרביים' } },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
