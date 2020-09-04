import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  artistas: any[] = [];

  constructor(public spotify: SpotifyService,
    private router: Router) { }

  ngOnInit(): void {}

  buscar(termino: string){
    this.spotify.artistas(termino)
    .subscribe((data:any)=>{
      console.log(data);
      this.artistas = data;
    });
  }

  verArtista(artista: any){
    let artistaId;
    if(artista.type==='artist'){
      artistaId = artista.id;
    }else{
      artistaId = artista.artists[0].id;
    }
    this.router.navigate(['/artista', artistaId])

  }

}
