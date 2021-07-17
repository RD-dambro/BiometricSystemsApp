import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveSampleComponent } from './save-sample.component';

describe('SaveSampleComponent', () => {
  let component: SaveSampleComponent;
  let fixture: ComponentFixture<SaveSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
