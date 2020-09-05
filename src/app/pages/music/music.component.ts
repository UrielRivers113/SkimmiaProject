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
  error: boolean;

  

  constructor(public spotify: SpotifyService,
    private router: Router) {
      this.error = false;
     }

  ngOnInit(): void {
    /* this.verToken(); */
  }

  buscar(termino: string){
    this.spotify.artistas(termino)
    .subscribe((data:any)=>{
      console.log(data);
      this.artistas = data;
    },(err)=>{
      this.error = true;
      console.log(err);
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


  /* verToken(){
    console.log('Este es el nuevo token:');
    this.spotify.getToken()
    .subscribe((token:any)=>{
      this.token = token.access_token;
      console.log(this.token);
    })
  }*/

  actualizarToken(){}

} 
