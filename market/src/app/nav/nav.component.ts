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
  @Input() currentRoute!: string; 

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    

  constructor(private breakpointObserver: BreakpointObserver) {
    this.logedIn = false
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
}
