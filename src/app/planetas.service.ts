import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Image } from './image';
import { Planeta } from './planeta';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {
  url = 'http://demo0761779.mockable.io/angularspaceship/planets';
  constructor(private http: HttpClient) { }

  getPlanetas() {
    return this.http.get<Image>(this.url);
  }

   // Observable Planeta sources
  private planetAnnouncedSource = new Subject<Planeta>();

  // Observable Planeta streams

  planetAnnounced$ = this.planetAnnouncedSource.asObservable();

  // service  Planeta commands

  announcePlanet(planet: Planeta) {
    console.log(planet);
    this.planetAnnouncedSource.next(planet);
  }
}
