import { Component, OnInit } from '@angular/core';
import { ListadoRequest } from '../../models/ListadoRequest.model';
import { ListadoSucursal } from '../../models/ListadoSucursal.model';
import { SucursalesService } from '../../services/sucursales.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  sucursalesList: ListadoSucursal[] = [];

  constructor(private sucursalService: SucursalesService) { }

  ngOnInit(): void {
    const request: ListadoRequest = {
      idUsuario: 40,
      idSucusal: 10,
      idModulo: 10
    }
    this.sucursalService.getListado(request)
      .subscribe(data => {
        this.sucursalesList = data;
      });
  }

}
