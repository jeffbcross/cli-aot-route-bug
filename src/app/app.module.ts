import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route, Resolve } from '@angular/router';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { HomeComponent } from './home/home.component';

const timeout = 5000;

class LateResolver implements Resolve<any> {
  resolve() {
    return new Promise((res) => {
      console.log('i will resolve in', timeout, 'ms');
      setTimeout(() => res(), timeout);
    });
  }
}

const homeRoute: Route = {
  path: '',
  component: HomeComponent
};
homeRoute.resolve

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
        component: ItemsComponent,
        resolve: {
          never: LateResolver
        }
      },
      homeRoute,
      otherRoute])
  ],
  providers: [LateResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
