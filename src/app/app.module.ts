import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { HomeComponent } from './home/home.component';

const homeRoute: Route = {
  path: '',
  component: HomeComponent
};

const otherRoute: Route = {
  path: 'other',
  component: ItemsComponent
};

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'items',
        component: ItemsComponent
      },
      homeRoute,
      otherRoute])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
