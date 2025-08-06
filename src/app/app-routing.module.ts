// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// //we have ti impoert the file as well which we want to route 
// import { ContactComponent } from './contact/contact.component';
// import { AboutComponent } from './about/about.component';

// const routes: Routes = [
//   { path: 'contact', component: ContactComponent },
//   { path: 'about', component: AboutComponent },
//   // { path: '', redirectTo: 'login', pathMatch: 'full' }, // optional default route
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
// src/app/app-routing.module.ts
import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  // optional: { path: '', redirectTo: 'contact', pathMatch: 'full' }
];
