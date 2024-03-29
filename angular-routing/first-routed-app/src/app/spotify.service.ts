import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
  searchAlbum(query: string): import("rxjs").Observable<Object> {
    throw new Error('Method not implemented.');
  }
  public token: string;
  
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { 
    this.token= 'Bearer BQC8-N0BMaQLGfAiUk7X5BwSUgl4tBgeSl2PRNAZ4Q9p3iLgj-qTf3IRIM9SH-GLanyCojt_bEMHbfqe3jbZjTevUIRX1ECTIMybviKFt2cUUagtSqJFVhiV_k6jX-H1CBRtz9Vs5uDbQkkx0ct7J8d4HQ84toDWTBDz0jQVKLC3y1ewlJ4j2klFouHfzuj9_a8LLG0YVXiCXf0'

  }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      this:this.token= 'Bearer BQC8-N0BMaQLGfAiUk7X5BwSUgl4tBgeSl2PRNAZ4Q9p3iLgj-qTf3IRIM9SH-GLanyCojt_bEMHbfqe3jbZjTevUIRX1ECTIMybviKFt2cUUagtSqJFVhiV_k6jX-H1CBRtz9Vs5uDbQkkx0ct7J8d4HQ84toDWTBDz0jQVKLC3y1ewlJ4j2klFouHfzuj9_a8LLG0YVXiCXf0'
    });
    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  }


  searchArtist(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=Artist`;
    const headers = new HttpHeaders({
      this:this.token= 'Bearer BQC8-N0BMaQLGfAiUk7X5BwSUgl4tBgeSl2PRNAZ4Q9p3iLgj-qTf3IRIM9SH-GLanyCojt_bEMHbfqe3jbZjTevUIRX1ECTIMybviKFt2cUUagtSqJFVhiV_k6jX-H1CBRtz9Vs5uDbQkkx0ct7J8d4HQ84toDWTBDz0jQVKLC3y1ewlJ4j2klFouHfzuj9_a8LLG0YVXiCXf0'
    });
    let obsArtists = this.http.get(url, { headers });
    return obsArtists;
  }


  searchAudiobook(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=Audiobook`;
    const headers = new HttpHeaders({
      this:this.token= 'Bearer BQC8-N0BMaQLGfAiUk7X5BwSUgl4tBgeSl2PRNAZ4Q9p3iLgj-qTf3IRIM9SH-GLanyCojt_bEMHbfqe3jbZjTevUIRX1ECTIMybviKFt2cUUagtSqJFVhiV_k6jX-H1CBRtz9Vs5uDbQkkx0ct7J8d4HQ84toDWTBDz0jQVKLC3y1ewlJ4j2klFouHfzuj9_a8LLG0YVXiCXf0'
    });
    let obsAudiobooks = this.http.get(url, { headers });
    return obsAudiobooks;
  }


  searchShow(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=Show`;
    const headers = new HttpHeaders({
      this:this.token= 'Bearer BQC8-N0BMaQLGfAiUk7X5BwSUgl4tBgeSl2PRNAZ4Q9p3iLgj-qTf3IRIM9SH-GLanyCojt_bEMHbfqe3jbZjTevUIRX1ECTIMybviKFt2cUUagtSqJFVhiV_k6jX-H1CBRtz9Vs5uDbQkkx0ct7J8d4HQ84toDWTBDz0jQVKLC3y1ewlJ4j2klFouHfzuj9_a8LLG0YVXiCXf0'
    });
    let obsAudioShows = this.http.get(url, { headers });
    return obsAudioShows;
  }
}