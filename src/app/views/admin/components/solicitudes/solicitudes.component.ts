import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/services/general.service';
import { SweetAlertService } from 'src/services/sweet-alert.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent {
  boton: any;
  id: any;
  data: any;
  areas: any;
  area: any;
  subarea: any;
  areas1: any;
  menu: any;
  titulo: any;
  icono: any;
  archivos: string[] = [];


  nuevoPC = new FormGroup({
    NOMBRE: new FormControl('', Validators.required),
    APELLIDOS: new FormControl('', Validators.required),
    TELEFONO: new FormControl('', Validators.required),
    DIRECCION: new FormControl('', Validators.required),
    LOCALIDAD: new FormControl('', Validators.required),
    PARTICULAR_INSTITUCION: new FormControl('', Validators.required),
    ASUNTO: new FormControl('', Validators.required),
    RESPONSABLE: new FormControl('', Validators.required),
    MOTIVOS: new FormControl('', Validators.required)
  });

  constructor(private api: GeneralService, private alerts: SweetAlertService, private router: Router,) { }

  ngOnInit(): void {


  }


  postForm(form: any) {




    this.alerts.alertaConfirmacionAgregar('Registro de datos', '¿Desea enviar los datos de su registro?')
      .then((res: any) => {

        if (res.isConfirmed) {
          if (form.NOMBRE !== '' &&
            form.APELLIDO !== '' &&
            form.TELEFONO !== '' &&
            form.DIRECCION !== '' &&
            form.LOCALIDAD !== '' &&
            form.PARTICULAR_INSTITUCION !== '' &&
            form.RESPONSABLE !== '' &&
            form.MOTIVOS !== '' &&
            form.ASUNTO !== ''
          ) {
            console.log(form);

            this.api.solicitudes(form).subscribe(data => {
              console.log(data);
              this.alerts.realizado('Completado', 'Se ha enviado el registro con exito').then((res: any) => {

              })

            }, error => {

              this.alerts.alertaError('Ups', 'Error de registro')
            })

          } else {
            this.alerts.alertaError('Error de registro', 'Todos los campos son obligatorios');
          }

        }

      })

  }





}
