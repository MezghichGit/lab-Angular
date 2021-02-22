import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEquipeComponent,
    AddEquipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
