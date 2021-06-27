import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitelistCreateComponent } from './whitelist-create.component';

describe('WhitelistCreateComponent', () => {
  let component: WhitelistCreateComponent;
  let fixture: ComponentFixture<WhitelistCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhitelistCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitelistCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
