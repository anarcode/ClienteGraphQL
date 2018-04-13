import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerActoresComponent } from './ver-actores.component';

describe('VerActoresComponent', () => {
  let component: VerActoresComponent;
  let fixture: ComponentFixture<VerActoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerActoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
