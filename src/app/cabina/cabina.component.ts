import { Component, OnInit, Input } from '@angular/core';
import { ContadorService } from '../contador.service';
import { map, tap, take } from 'rxjs/operators';
import { Observable, Subscription, interval, of }   from 'rxjs';


@Component({
  selector: 'app-cabina',
  templateUrl: './cabina.component.html',
  styleUrls: ['./cabina.component.css']
})
export class CabinaComponent implements OnInit {
  secondsCounter = interval(1000);
  counter = 10;
  timempo = 10;
  subs: Subscription;
  counterSubs: Subscription;

  constructor(private contadorService: ContadorService) {
    this.subs = contadorService.timerAnnounced$.subscribe(
      start => {
        this.handleCounter(start);
      }
    )
  }
  handleCounter(start) {
    if(start) {
      this.startCounter();
    } else {
      
    }
  }
  startCounter() {
    if(this.counter != 0 && this.counter != this.timempo) { return; }
    this.counterSubs = this.secondsCounter.pipe(
      take(this.timempo),
      map((v)=>(this.timempo-1)-v)
    ).subscribe((v) => this.counter = v)
  }
  
  ngOnInit() {
  }
  
} 
