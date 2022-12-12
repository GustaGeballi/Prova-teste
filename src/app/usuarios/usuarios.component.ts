import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../usuario.service';
import { Users } from '../usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  usuario: Users[]=[];

  constructor(private usuarioService: UsuarioService){ }

  ngOnInit(): void{
    this.usuarioService.ObsUsuarios()
        .subscribe( us => this.usuario = us);
  }
}
