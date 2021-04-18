import { MaterialModule } from './modules/material.module';
import { TopNavComponent } from './topNav/top-nav/top-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { NotesFormComponent } from './notes/notes-form/notes-form.component';

@NgModule({
  declarations: [
    AppComponent,
      TopNavComponent,
      NotesListComponent,
      NotesFormComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
