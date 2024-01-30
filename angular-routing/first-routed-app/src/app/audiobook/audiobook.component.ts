import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-audiobook',
  templateUrl: './audiobook.component.html',
  styleUrls: ['./audiobook.component.css']
})
export class AudiobookComponent {
  title = 'spotify-app';
  query: string;
  obsTrack: Observable<Object>;
  results: any;
  constructor(public spotify: SpotifyService) {
   
  }

  submit(query:HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsTrack = this.spotify.searchAudiobook(this.query);
    this.obsTrack.subscribe((data) => this.results = data); 
  }
}