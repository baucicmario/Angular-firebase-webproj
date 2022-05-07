import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public cone=false
  public ctwo=false
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1*1', cols: 1, rows: 1 },
          { title: 'Card 2 1*1', cols: 1, rows: 1 },
          { title: 'Card 3 1*1', cols: 1, rows: 1 },
          { title: 'Card 4 1*1', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 2*1', cols: 2, rows: 1 },
        { title: 'Card 1*1', cols: 1, rows: 1 },
        { title: 'Card 1*2', cols: 1, rows: 2 },
        { title: 'Card 2. 1*1', cols: 1, rows: 1 }
      ];
    })
  );
    darkToggle(event:any){
      this.cone = !event.checked
    }
  constructor(private breakpointObserver: BreakpointObserver) {}
}
