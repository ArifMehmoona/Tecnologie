import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDRAOqWyM7L10feXaRKXdBoUBl9Bt9meHbgVAaUXnf-xtffDSbOvhb3mP1Tr12PBuH8b__sdDqRwQg8yiml5vXTS3USFngY6Wyr68iIDX0pnWI8e_A9VnbkBjV0_bbo3VKfNeCaE4xzVlykzzmubD-biyrIMgsNgZZx9mhe2Dbd6VzPLxN72QuiJITAilzBD0oP_8Ex8moRbZs'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
