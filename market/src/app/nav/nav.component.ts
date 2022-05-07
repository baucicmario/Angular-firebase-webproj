import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay  } from 'rxjs/operators';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  logedIn
  public cone=false
  imageUrl: string = "";
  cartItems: number = 0
  @Input() currentRoute!: string; 

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver) {
    this.logedIn = false
    this.cartItems = 0
  }
  addItem(){
    this.cartItems = this.cartItems+1;
  }
  removeItem(){
    this.cartItems = this.cartItems-1;
  }

  isAuthenticated(){
    return this.logedIn
  }
  receiveMessage($event:any) {
    this.logedIn = $event
    this.logedIn = true
  }
  logedOut(){
    this.logedIn = false
  }
  bigToggle(event:any){
    this.cone = event.checked

  }
}
