import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent {
  /** Based on the screen size, switch from standard to one column per row */
  prod = Object
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return [
        { title: 'Nincs kapcsolat firabesel', img: "" },
      ];
    })
  );


 



  constructor(private breakpointObserver: BreakpointObserver, private httpClient: HttpClient) {
    
    let json:any 
    let termekek: { title: string, img: string }[] = [
      { title: 'Szobor 5', img: "/assets/img/10.jpg"}
  ];
    this.httpClient.get("https://webfejleszte-bmario-default-rtdb.firebaseio.com/products.json")
    .subscribe(products => {
            json=Object.values(products);
            termekek.pop()
            for (var val of json) {
              for (var val2 of val) {
                termekek.push(val2)
              }
            }
            
            for(let i=0; i<termekek.length; i++){
              console.log(termekek[i]);
          }
          this.cards=this.breakpointObserver.observe(Breakpoints.Handset).pipe(
            map(({ matches }) => termekek))
          })
  }
}
