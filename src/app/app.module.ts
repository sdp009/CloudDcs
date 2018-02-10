import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    WelcomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'welcome',
        component: WelcomeComponent,
        children:[
          { path: '', component: LoginComponent, outlet:'authenticate'},
          { path: 'login', component: LoginComponent, outlet:'authenticate'},
          { path: 'signup', component: SignUpComponent, outlet:'authenticate'}
        ]        
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },	
      {
         path: '',
         redirectTo: '/welcome',
         pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
