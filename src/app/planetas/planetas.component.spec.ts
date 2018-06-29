import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetasComponent } from './planetas.component';

describe('PlanetaComponent', () => {
  let component: PlanetasComponent;
  let fixture: ComponentFixture<PlanetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
