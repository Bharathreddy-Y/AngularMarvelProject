import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersidComponent } from './charactersid.component';

describe('CharactersidComponent', () => {
  let component: CharactersidComponent;
  let fixture: ComponentFixture<CharactersidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
