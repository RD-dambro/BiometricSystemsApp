import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitelistListComponent } from './whitelist-list.component';

describe('WhitelistListComponent', () => {
  let component: WhitelistListComponent;
  let fixture: ComponentFixture<WhitelistListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhitelistListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitelistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
