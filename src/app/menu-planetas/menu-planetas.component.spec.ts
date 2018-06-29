import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPlanetasComponent } from './menu-planetas.component';

describe('MenuPlanetasComponent', () => {
  let component: MenuPlanetasComponent;
  let fixture: ComponentFixture<MenuPlanetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPlanetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPlanetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
