import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestToursComponent } from './best-tours.component';

describe('BestToursComponent', () => {
  let component: BestToursComponent;
  let fixture: ComponentFixture<BestToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestToursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
