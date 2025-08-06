import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
     { path: 'about', component: AboutComponent },
     { path: 'contact', component: ContactComponent }
];

@NgModule({
     declarations: [
          AppComponent,
          NavComponent,
          AboutComponent,
          ContactComponent
     ],
     imports: [
          BrowserModule,
          RouterModule.forRoot(routes) 
     ],
     bootstrap: [AppComponent]
})
export class AppModule { }
