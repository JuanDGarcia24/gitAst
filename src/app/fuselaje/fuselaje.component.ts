import { Component, OnInit } from '@angular/core';
import { PlanetasService } from '../planetas.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fuselaje',
  templateUrl: './fuselaje.component.html',
  styleUrls: ['./fuselaje.component.css']
})
export class FuselajeComponent implements OnInit {
  message: string;
  planeta = 'X';
  grados = 0;
  img = '';
  subscription: Subscription;

  constructor(private planetasService: PlanetasService) {
    this.subscription = planetasService.planetAnnounced$.subscribe(
      planet => {
        this.handleSelection(planet);
      }
    )
  }
  
  handleSelection(planet) {
    this.planeta = planet.name;
    this.grados = planet.degrees;
    this.img = planet.img;
    this.getMessage();
  }

  ngOnInit() {
    this.getMessage();
  }

  getMessage(): void {
    this.message = `Planeta ${this.planeta} avistado a ${this.grados} grados`;
  }

}
