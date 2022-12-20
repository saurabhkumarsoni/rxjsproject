import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcateMapComponent } from './concate-map.component';

describe('ConcateMapComponent', () => {
  let component: ConcateMapComponent;
  let fixture: ComponentFixture<ConcateMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcateMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcateMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
