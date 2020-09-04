import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  // Para poder tomar ese objeto mapa del lado de angular, necesito ViewChild
  @ViewChild('map', { static: true }) mapaElement: ElementRef;
  map: google.maps.Map 
  infoWindow: google.maps.InfoWindow; // Definición del tipo map

  posicion={};


  // Como la libreria map no está en typescript, no se si es MAP, map, Map, por eso instalo:
  // npm install @types/googlemaps 


  constructor() { }

  ngOnInit(): void {
    this.cargarMapa();
  }


  cargarMapa(){

    // Para definir el punto central (la ubicación del usuario pues!!) función propia de google map
    const latLng = new google.maps.LatLng(37.784679,-122.395936);

    const mapaOpciones: google.maps.MapOptions = {
      center: latLng,
      zoom: 13,
      //Tipo de mapa
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.infoWindow = new google.maps.InfoWindow();
    this.map = new google.maps.Map(this.mapaElement.nativeElement, mapaOpciones);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };


          this.posicion = pos;

          this.agregarMarcador(this.posicion);


  
          this.infoWindow.setPosition(pos);
          this.infoWindow.setContent("Location found.");
          this.infoWindow.open(this.map);
          this.map.setCenter(pos);
        },
        () => {
          this.handleLocationError(true, this.infoWindow, this.map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      this.handleLocationError(false, this.infoWindow, this.map.getCenter());
    }
  }


  handleLocationError(
    browserHasGeolocation: boolean,
    infoWindow: google.maps.InfoWindow,
    pos: google.maps.LatLng
  ) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(this.map);
  }


  agregarMarcador(posicion){
    const latLng = new google.maps.LatLng(posicion.lat,posicion.lng);
    const marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng,
      draggable: true
    })
  }






}
