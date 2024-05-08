import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOnlyComponent } from './header-only.component';

describe('HeaderOnlyComponent', () => {
  let component: HeaderOnlyComponent;
  let fixture: ComponentFixture<HeaderOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderOnlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
