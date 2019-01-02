import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';
import { EducationComponent } from './education/education.component';
import { FreebieComponent } from './freebie/freebie.component';

const routes: Routes = [
	{path: '', component: HomeComponent, pathMatch: "full" },
	{path: 'web', component: WebComponent},
	{path: 'mobile', component: MobileComponent},
	{path: 'education', component: EducationComponent},
	{path: 'freebie', component: FreebieComponent},
	{path: "**", component: HomeComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})

export class AppRoutingModule{}