import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artist: any = {}
  TopTracks: any[] = []

  constructor(private route: ActivatedRoute, private spotify: SpotifyService) {
    this.route.params.subscribe(params=>{
      this.artista(params['id']);
      this.topTracks(params['id']);
      console.log(params);
    })
   }

  ngOnInit(): void {
  }

  artista(id: string){
    this.spotify.artista(id)
    .subscribe((artista:any)=>{
      console.log(artista);
      this.artist = artista
    })
  }

  topTracks(id: string){
    this.spotify.topTracks(id)
    .subscribe(topTracks=>{
      console.log(topTracks);
      this.TopTracks = topTracks
    })

  }

}
