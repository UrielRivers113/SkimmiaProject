import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo = '';
  pwd = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ingresar(){
    this.router.navigateByUrl('/home');
  }

}
