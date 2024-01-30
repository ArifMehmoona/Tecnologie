import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TrackComponent } from './track/track.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { ShowComponent } from './show/show.component';
import { AudiobookComponent } from './audiobook/audiobook.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackComponent,
    AlbumComponent,
    ArtistComponent,
    ShowComponent,
    AudiobooksComponent,
    AudiobookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
