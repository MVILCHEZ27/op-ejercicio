import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bitacora } from 'src/app/Model/bitacora.model';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css']
})
export class BitacoraComponent implements OnInit {

  bitacoras?: Bitacora[];

  constructor(private service: ServiceService, private router: Router) { }

  pageActual: number = 1;
  ngOnInit(): void {
    this.getBitacora();
  }

  getBitacora(){
    this.service.getBitacora().subscribe(data=>{
      this.bitacoras=data;
      console.log(this.bitacoras);
    });
  }

}
