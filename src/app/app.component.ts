import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouteReuseStrategy } from '@angular/router';
import { AwsComponent } from './aws/aws.component';

import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './customer/customer.component';
import { OfficesComponent } from './offices/offices.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { CareersComponent } from './careers/careers.component'; 
import { RequestdemoComponent } from './requestdemo/requestdemo.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';


import { WebinarrecordingComponent } from '../webinarrecording/webinarrecording.component';
import { RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { MatIconModule } from '@angular/material/icon';
import { ContactComponent } from './contact/contact.component';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';

import { DotnetComponent } from './dotnet/dotnet.component';
import { MysqlComponent } from './mysql/mysql.component';
import { AngularComponent } from './angular/angular.component';
import { MssqlComponent } from './mssql/mssql.component';




@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterOutlet,RouterModule,PageComponent,MssqlComponent,DotnetComponent,AngularComponent,MysqlComponent,SoftwareDevelopmentComponent,MatIconModule,ContactComponent,HomeComponent,WebinarrecordingComponent,CustomerComponent,AboutComponent,OfficesComponent,AwsComponent,LeadershipComponent,CareersComponent,RequestdemoComponent,PrivacyComponent,TermsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {



}
