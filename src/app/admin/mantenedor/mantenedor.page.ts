import { Component, OnInit } from '@angular/core';
import { ApService } from 'src/app/base/ap.service'; 

@Component({
  selector: 'app-mantenedor',
  templateUrl: './mantenedor.page.html',
  styleUrls: ['./mantenedor.page.scss'],
})
export class MantenedorPage implements OnInit {
  users:any[] = []
  constructor (private api:ApService) {}

  ngOnInit() {
    this.cargarUsuarios();
  }
  
  cargarUsuarios() {
    this.api.getUsers().subscribe(
      (data) => {
        this.users = data
        console.log(this.users)
      },
      (error) => {
        console.log("Error en la llamada :" + error)
      });
  }
  modificarUsuario(id: any) {

  }
  eliminarUsuario(id: any) {

  }
}