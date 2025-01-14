import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentAddedComponent } from './recent-added.component';

describe('RecentAddedComponent', () => {
  let component: RecentAddedComponent;
  let fixture: ComponentFixture<RecentAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentAddedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
