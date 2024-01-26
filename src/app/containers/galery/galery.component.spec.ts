import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryComponent } from './galery.component';

describe('GaleryComponent', () => {
  let component: GaleryComponent;
  let fixture: ComponentFixture<GaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
