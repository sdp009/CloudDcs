import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApptoolsComponent } from './apptools/apptools.component';
import { X11Component } from './x11/x11.component';
import { DockerComponent } from './docker/docker.component';
import { VncComponent } from './vnc/vnc.component';

import { ElasticsearchService } from './elasticsearch.service';
import { DiscoverService } from './discover.service';
import { XwinService } from './xwin.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    WelcomeComponent,
    DashboardComponent,
    ApptoolsComponent,
    X11Component,
    DockerComponent,
    VncComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
          { path: '', component: X11Component, outlet:'searchpanel'},
          { path: 'x11', component: X11Component, outlet:'searchpanel'},
          { path: 'docker', component: DockerComponent, outlet:'searchpanel'},
          { path: 'vnc', component: VncComponent, outlet:'searchpanel'},
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
  providers: [ElasticsearchService, DiscoverService, XwinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
