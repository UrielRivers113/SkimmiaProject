import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MapsComponent } from './pages/maps/maps.component';
import { MusicComponent } from './pages/music/music.component';
import { ArtistaComponent } from './components/artista/artista.component';


const routes: Routes = [
  {path:'', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'music', component: MusicComponent},
  {path: 'artista/:id', component: ArtistaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
