import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../base/authen.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage {
  user: { username: string; email: string; password: string } = {
    username: '',
    email: '',
    password: ''
  };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    if (this.user.username && this.user.email && this.user.password) {
      this.authService.registrar(this.user).subscribe(
        success => {
          if (success) {
            this.router.navigate(['/home']); 
          } else {
            this.errorMessage = 'Error al registrarse'; 
            this.router.navigate(['/error']); // Redirigir a página de error
          }
        },
        error => {
          this.errorMessage = 'Error en el registro'; 
          console.error('Error en el registro', error);
          this.router.navigate(['/error']); // Redirigir a página de error
        }
      );
    } else {
      this.errorMessage = 'Por favor complete todos los campos'; 
    }
  }
}
