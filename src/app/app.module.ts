import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LernmodusComponent } from './lernmodus/lernmodus.component';
import { TestmodusComponent } from './testmodus/testmodus.component';
import { PruefmodusComponent } from './pruefmodus/pruefmodus.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { LernlisteComponent } from './lernliste/lernliste.component';
import { LerneinzelComponent } from './lerneinzel/lerneinzel.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LernmultiComponent } from './lernmulti/lernmulti.component';
import { LernsingleComponent } from './lernsingle/lernsingle.component';
import { LernfillinComponent } from './lernfillin/lernfillin.component';



@NgModule({
  declarations: [
    AppComponent,
    LernmodusComponent,
    TestmodusComponent,
    PruefmodusComponent,
    StartseiteComponent,
    LernlisteComponent,
    LerneinzelComponent,
    LernmultiComponent,
    LernsingleComponent,
    LernfillinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


