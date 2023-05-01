/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CafeComponent } from './cafe.component';
import { Cafe } from './cafe';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CafeService } from './cafe.service';
import { CafeModule } from './cafe.module';
import { By } from '@angular/platform-browser';


describe('CafeComponent', () => {
  let component: CafeComponent;
  let fixture: ComponentFixture<CafeComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, CafeModule],
      declarations: [ CafeComponent ],
      providers: [ CafeService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeComponent);
    component = fixture.componentInstance;

    const cafe = new Cafe(
      1,"Cafe 1", "Café de Origen","Bogotá","Naranja",100,"https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-navegante-cafe-colombiano-f_540x.png"
    );
    component.variedadesCafe.push(cafe);

    fixture.detectChanges();
    const cafe1 = new Cafe(
      2,"Cafe 2", "Blend","Bogotá","Cocoa",200,"https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-navegante-cafe-colombiano-f_540x.png"
    );
      component.variedadesCafe.push(cafe1);

      fixture.detectChanges();
    const cafe2 = new Cafe(
        3,"Cafe 3", "Café de Origen","Bogotá","Chocolate",300,"https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-navegante-cafe-colombiano-f_540x.png"
      );
        component.variedadesCafe.push(cafe2);

    fixture.detectChanges();
    debug = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 <tr> elements', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4)
  });
  it('should have <thread head>', () => {
    expect(debug.queryAll(By.css('thead.thead-dark'))).toHaveSize(1)
  });
});
