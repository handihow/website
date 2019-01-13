import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';
import { TermsComponent } from './terms/terms.component';
import { FreebieComponent } from './freebie/freebie.component';

const routes: Routes = [
	{path: '', component: HomeComponent, pathMatch: "full" },
	{path: 'web', component: WebComponent},
	{path: 'mobile', component: MobileComponent},
	{path: 'terms', component: TermsComponent},
	{path: 'freebie', component: FreebieComponent},
	{path: "**", component: HomeComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})

export class AppRoutingModule{}