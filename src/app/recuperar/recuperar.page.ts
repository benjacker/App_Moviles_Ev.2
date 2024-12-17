import { Component } from '@angular/core';
import { AuthService } from '../base/authen.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {
  user = {
    usuario: '',
  };
  mensaje = '';

  constructor(private authService: AuthService, private router: Router) {}

  recuperar() {
    if (this.user.usuario.length === 0) {
      this.mensaje = 'Por favor ingrese un usuario.';
    } else {
      this.authService.resetPassword(this.user.usuario).subscribe(
        response => {
          this.mensaje = 'Se ha enviado un enlace para restablecer su contraseña.';
          // Aquí podrías redirigir a una página de éxito o mostrar una notificación
          this.router.navigate(['/home']); // Redirigir a home o a una página de éxito
        },
        error => {
          this.mensaje = 'Error al enviar el enlace. Intente nuevamente.';
          console.error('Error al enviar el enlace', error);
          this.router.navigate(['/error']); // Redirigir a página de error
        }
      );
    }
  }
}
