import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  // Observable boolean sources
  private time = new Subject<boolean>();

  // Observable boolean streams

  timerAnnounced$ = this.time.asObservable();
  
  constructor() { }

  // service  boolean commands

  announceTimer(start: boolean) {
    // this.timerAnnouncedSource.next(start); // original
    this.time.next(start);
    
  }

}