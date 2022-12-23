import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LerneinzelComponent } from './lerneinzel/lerneinzel.component';
import { LernlisteComponent } from './lernliste/lernliste.component';
import { LernmodusComponent } from './lernmodus/lernmodus.component';
import { LernsingleComponent } from './lernsingle/lernsingle.component';
import { PruefmodusComponent } from './pruefmodus/pruefmodus.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { TestmodusComponent } from './testmodus/testmodus.component';
import { LernmultiComponent } from './lernmulti/lernmulti.component';
import { LernfillinComponent } from './lernfillin/lernfillin.component';

const approutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: StartseiteComponent},
  { path: 'testmodus', component:TestmodusComponent},
  { path: 'lernmodus', component:LernmodusComponent},
  { path: 'lernliste', component:LernlisteComponent},
  { path: 'lerneinzeln', component:LerneinzelComponent},
  { path: 'pruefmodus',component:PruefmodusComponent},
  { path: 'lernsingle',component:LernsingleComponent},
  { path: 'lernmulti',component:LernmultiComponent},
  { path: 'lernfillin',component:LernfillinComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
