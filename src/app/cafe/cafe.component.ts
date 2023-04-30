import { Component, OnInit } from '@angular/core';
import { CafeService } from './cafe.service';
import { Cafe } from './cafe';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css']
})
export class CafeComponent implements OnInit {

  variedadesCafe: Array<Cafe> =[];
  cantidadOriginal: number=0;
  cantidadBlend: number=0;

  constructor( private cafeService: CafeService) { }

  getVariedadesCafe(): void {
    this.cafeService.getVariedadesCafe().subscribe((variedadesCafe) => {
      this.variedadesCafe = variedadesCafe;
      this.cantidadesPorVariedad();
    });
  }

  ngOnInit() {
    this.getVariedadesCafe();
  }

  cantidadesPorVariedad(){
    console.log('tipo lenght--> '+this.variedadesCafe.length);

    for (let i = 0; i < this.variedadesCafe.length; i++) {
      console.log('tipo--> '+this.variedadesCafe[i].tipo);
      if(this.variedadesCafe[i].tipo == 'Café de Origen'){
        this.cantidadOriginal = this.cantidadOriginal + 1;
      }else if(this.variedadesCafe[i].tipo == 'Blend'){
        this.cantidadBlend = this.cantidadBlend + 1;
      }
    }
  }
}
