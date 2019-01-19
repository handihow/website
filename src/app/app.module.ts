import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HomeComponent } from './home/home.component';

import { AppComponent } from './app.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { StrengthsComponent } from './strengths/strengths.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FreebieComponent } from './freebie/freebie.component';
import { TermsComponent } from './terms/terms.component';
import { FirstSecretDialogComponent } from './first-secret-dialog/first-secret-dialog.component';
import { SecondSecretDialogComponent } from './second-secret-dialog/second-secret-dialog.component';
import { ThirdSecretDialogComponent } from './third-secret-dialog/third-secret-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    HomeComponent,
    WebComponent,
    MobileComponent,
    FooterComponent,
    ServicesComponent,
    StrengthsComponent,
    PortfolioComponent,
    FreebieComponent,
    TermsComponent,
    FirstSecretDialogComponent,
    SecondSecretDialogComponent,
    ThirdSecretDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  entryComponents: [FirstSecretDialogComponent, SecondSecretDialogComponent, ThirdSecretDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }