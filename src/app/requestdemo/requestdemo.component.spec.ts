import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestdemoComponent } from './requestdemo.component';

describe('RequestdemoComponent', () => {
  let component: RequestdemoComponent;
  let fixture: ComponentFixture<RequestdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestdemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
