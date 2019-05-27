import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import {SlideshowModule} from 'ng-simple-slideshow';

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
import { SelfiespelComponent } from './selfiespel/selfiespel.component';
import { PillarsComponent } from './pillars/pillars.component';
import { SzappComponent } from './szapp/szapp.component';
import { SelfiethegameComponent } from './selfiethegame/selfiethegame.component';

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
    ThirdSecretDialogComponent,
    SelfiespelComponent,
    PillarsComponent,
    SzappComponent,
    SelfiethegameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    StoreModule.forRoot({ count: counterReducer }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    SlideshowModule
  ],
  entryComponents: [FirstSecretDialogComponent, SecondSecretDialogComponent, ThirdSecretDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }