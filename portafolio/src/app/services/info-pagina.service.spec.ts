import { TestBed, inject } from '@angular/core/testing';

import { InfoPaginaService } from './info-pagina.service';

describe('InfoPaginaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoPaginaService]
    });
  });

  it('should be created', inject([InfoPaginaService], (service: InfoPaginaService) => {
    expect(service).toBeTruthy();
  }));
});
