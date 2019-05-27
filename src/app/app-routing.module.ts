import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';
import { TermsComponent } from './terms/terms.component';
import { FreebieComponent } from './freebie/freebie.component';
import { PillarsComponent } from './pillars/pillars.component';
import { SzappComponent } from './szapp/szapp.component';
import { SelfiethegameComponent } from './selfiethegame/selfiethegame.component';

const routes: Routes = [
	{path: '', component: HomeComponent, pathMatch: "full" },
	{path: 'web', component: WebComponent},
	{path: 'mobile', component: MobileComponent},
	{path: 'terms', component: TermsComponent},
	{path: 'freebie', component: FreebieComponent},
	{path: 'pillars', component: PillarsComponent},
	{path: 'szapp', component: SzappComponent},
	{path: 'selfiethegame', component: SelfiethegameComponent},
	{path: "**", component: HomeComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})

export class AppRoutingModule{}