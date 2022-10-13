import { TestBed } from '@angular/core/testing';

import { HabilitaPorServicioGuard } from './habilita-por-servicio.guard';

describe('HabilitaPorServicioGuard', () => {
  let guard: HabilitaPorServicioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HabilitaPorServicioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
