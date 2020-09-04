import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('spotify service ready');
   }

   artistas(termino: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC4YYNID-TnBDuWQ-nENvLYLrKuDBAXIouFJ40ZIVhS3tySscP53_0uir6lsZ7vLdCzIRJN3fH8XtFVtFw'
     });
     return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=5`, {headers})
     .pipe(map(data=>{
       return data['artists'].items;
     }));
   }


   artista (id: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC4YYNID-TnBDuWQ-nENvLYLrKuDBAXIouFJ40ZIVhS3tySscP53_0uir6lsZ7vLdCzIRJN3fH8XtFVtFw'
     });
     return this.http.get(`https://api.spotify.com/v1/artists/${id}`, {headers})
     /* .pipe(map(data=>{
       return data['artists'].items;
     })); */
   }


   topTracks(id: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCLblmB0lb0wHkdN96wgZsf8PGjwocIK7VA3oDaXosZMaoqf0h7LqYOj4JBPthBzz34JM1iDo5VS923eys'
     });
     return this.http.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=us`, {headers})
     .pipe(map(data=>{
       return data['tracks'];
     }));
   }
}
