import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PlanetasService } from '../planetas.service';
import { Planeta } from '../planeta';

@Component({
  selector: 'app-menu-planetas',
  templateUrl: './menu-planetas.component.html',
  styleUrls: ['./menu-planetas.component.css']
})
export class MenuPlanetasComponent implements OnInit {
  planetas: Planeta[];
	selectedPlanet: Planeta;
  constructor(
  	private route: ActivatedRoute,
  	private location: Location,
  	private planetasService: PlanetasService
  ) { }

  ngOnInit() {
  	this.getPlanetas();
  }

 	getPlanetas(): void {
 		this.planetasService.getPlanetas()
 			.subscribe(d => this.setPlanetas(d.images));
 	}

 	loadPlanet(): void {
 		// if url has planet -> selectPlanet(iterate over this.planetas)
 		const name = this.route.snapshot.paramMap.get('planeta');
 		if(name) {
 			let selected = this.planetas.filter(d => d.name == name);
 			if(selected.length != 0) { this.selectPlanet(selected[0]) }
 		}

 	}

 	setPlanetas(images) {
 		let arr = [];
 		Object.keys(images).forEach((key,index) => {
		    let planeta = { name: key, img: images[key].img, degrees: +images[key].degrees } as Planeta;
		    arr.push(planeta);
		});
		this.planetas = arr;
		this.loadPlanet();
 	}

 	selectPlanet(planet) {
 		this.selectedPlanet = planet;
 		this.planetasService.announcePlanet(planet);
 		this.location.go(`/planetas/${planet.name}`);

 	}
}
