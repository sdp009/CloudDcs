import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { ApptoolsComponent } from './apptools/apptools.component';

import { ElasticsearchService } from './elasticsearch.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    WelcomeComponent,
    DashboardComponent,
    SearchComponent,
    ApptoolsComponent
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
        component: DashboardComponent,
        children:[
          { path: '', component: SearchComponent, outlet:'searchpanel'},
          { path: 'appopen', component: ApptoolsComponent, outlet:'searchpanel'}
        ]   
      },	
      {
         path: '',
         redirectTo: '/welcome',
         pathMatch: 'full'
      }
    ])
  ],
  providers: [ElasticsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
