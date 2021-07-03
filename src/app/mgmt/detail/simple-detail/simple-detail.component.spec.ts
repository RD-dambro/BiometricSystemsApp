import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDetailComponent } from './simple-detail.component';

describe('SimpleDetailComponent', () => {
  let component: SimpleDetailComponent;
  let fixture: ComponentFixture<SimpleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
