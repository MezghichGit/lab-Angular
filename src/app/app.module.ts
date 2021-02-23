import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { MypipePipe } from './mypipe.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './posts/posts.component'

@NgModule({
  declarations: [
    AppComponent,
    ListEquipeComponent,
    AddEquipeComponent,
    MypipePipe,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
