import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaustMapComponent } from './exaust-map.component';

describe('ExaustMapComponent', () => {
  let component: ExaustMapComponent;
  let fixture: ComponentFixture<ExaustMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExaustMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaustMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
