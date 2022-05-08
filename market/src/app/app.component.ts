

import { Component, OnDestroy} from '@angular/core';
import { Router,NavigationStart, Event as NavigationEvent } from '@angular/router';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentRoute!: string
  
  event$ 
 
  constructor(private router: Router) {
    alert('PLZ a home oldalon nezd vegig a leirast segít az osztalyzasban mit hol találsz!');
            
    this.event$
      =this.router.events
          .subscribe(
            (event: NavigationEvent) => {
              if(event instanceof NavigationStart) {
                this.currentRoute = event.url;
              }
            });
  }
 
  ngOnDestroy() {
    this.event$.unsubscribe();
  }
}
 