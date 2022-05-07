import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  /** Based on the screen size, switch from standard to one column per row */
  allproducts
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return [
        { title: 'Festmény 1', img: "/assets/img/1.jpg", cols: 1, rows: 1 },
        { title: 'Festmény 2', img: "/assets/img/2.jpg", cols: 1, rows: 1 },
        { title: 'Festmény 3', img: "/assets/img/3.jpg", cols: 1, rows: 1 },
        { title: 'Festmény 4', img: "/assets/img/4.jpg", cols: 1, rows: 1 },
        { title: 'Festmény 5', img: "/assets/img/5.jpg", cols: 1, rows: 1 },
        { title: 'Szobor 1', img: "/assets/img/6.jpg", cols: 1, rows: 1 },
        { title: 'Szobor 2', img: "/assets/img/7.jpg", cols: 1, rows: 1 },
        { title: 'Szobor 3', img: "/assets/img/8.jpg", cols: 1, rows: 1 },
        { title: 'Szobor 4', img: "/assets/img/9.jpg", cols: 1, rows: 1 },
        { title: 'Szobor 5', img: "/assets/img/10.jpg", cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private httpClient: HttpClient) {
    
    this.allproducts = this.httpClient.get("https://webfejleszte-bmario-default-rtdb.firebaseio.com/products.json").subscribe(products => console.log(products))
    
    
  }
}
