import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { StoryComponent } from './components/story/story.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoryService } from './services/story.service';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
