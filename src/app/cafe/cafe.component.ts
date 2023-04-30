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
  constructor( private cafeService: CafeService) { }

  getVariedadesCafe(): void {
    this.cafeService.getVariedadesCafe().subscribe((variedadesCafe) => {
      this.variedadesCafe = variedadesCafe;
    });
  }

  ngOnInit() {
    this.getVariedadesCafe();
  }
}
