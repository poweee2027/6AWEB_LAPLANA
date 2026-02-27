import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonRegister } from './pokemon-register';

describe('PokemonRegister', () => {
  let component: PokemonRegister;
  let fixture: ComponentFixture<PokemonRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonRegister],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonRegister);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
