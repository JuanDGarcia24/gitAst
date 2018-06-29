import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges {
	
	routes = ["inicio", "control", "planetas"];
	selectedRoute: string;

  constructor(
  	private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  	this.getSelectedRoute();
  }

  ngOnChanges() {
  	this.getSelectedRoute();
  }

  getSelectedRoute(): void {
  	console.log('getSelectedroute')
  	console.log(this.selectedRoute)
  }
}

