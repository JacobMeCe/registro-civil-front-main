import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/services/general.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
}
)

export class ListaComponent {

   spinner=false;
 data:any
 data1:any
data2:any
conteo: any
conteo1: any
conteo2: any
reponsable:any
datos:any
   constructor(private api: GeneralService,private router: Router) { }

  ngOnInit() {
   this.reponsable= localStorage.getItem('tipo')


   this.spinner=true;
    this.api.listaSolicitudes().subscribe((res: any) => {
      this.data = res.body;
      console.log(this.data);

   this.conteo=res.body.length
   console.log(this.conteo);

      this.spinner=false;
    });


    this.api.listaSolicitudes2().subscribe((res: any) => {
      this.data1 = res.body;
      this.conteo1=res.body.length
      this.spinner=false;
    });


    this.api.listaSolicitudes3().subscribe((res: any) => {
      this.data2 = res.body;
      this.conteo2=res.body.length
      this.spinner=false;
    });



  }

  verDetalles(id: any) {
    this.router.navigate(['/admin/listado/', id]);
  }


}
