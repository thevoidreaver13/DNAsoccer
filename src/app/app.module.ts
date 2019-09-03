import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavoutComponent } from './navout/navout.component';
import { UserComponent } from './user/user.component';
import { PublicComponent } from './public/public.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [  
  {path: 'user', component: UserComponent},
  {path: '', component: PublicComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NavoutComponent,
    UserComponent,
    PublicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
