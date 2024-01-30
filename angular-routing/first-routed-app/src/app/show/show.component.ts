import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class Show {
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
    this.obsTrack = this.spotify.searchShow(this.query);
    this.obsTrack.subscribe((data) => this.results = data); 
  }
}