import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'





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

  ingresar(forma: NgForm){
    console.log(forma);
    if (forma.invalid) {
      Object.values(forma.controls).forEach(control => {
      control.markAsTouched();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal!',
      })
      });
      return;
    }

    if (forma.valid) {
      this.router.navigateByUrl('/home');
    } 



  }

}
