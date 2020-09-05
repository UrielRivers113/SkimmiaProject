import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = '';

  constructor(private http: HttpClient) {
    console.log('spotify service ready');
    this.getToken();
   }

   artistas(termino: string){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
     });
     return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=5`, {headers})
     .pipe(map(data=>{
       return data['artists'].items;
     }));
   }


   artista (id: string){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
     });
     return this.http.get(`https://api.spotify.com/v1/artists/${id}`, {headers})
     /* .pipe(map(data=>{
       return data['artists'].items;
     })); */
   }


   topTracks(id: string){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
     });
     return this.http.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=us`, {headers})
     .pipe(map(data=>{
       return data['tracks'];
     }));
   }

   getToken() {
    const url = 'https://accounts.spotify.com/api/token';
    const headers = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    };
    const body = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', '07787d2a818e440d85083bc40f7fc184')
      .set('client_secret', '036252382a664dc58f4bbca437567a92');
   
    this.http.post(url, body.toString(), headers)
    .subscribe((token:any)=>{
      this.token = token.access_token;
      console.log(this.token);
    })
   
  }
  

}


