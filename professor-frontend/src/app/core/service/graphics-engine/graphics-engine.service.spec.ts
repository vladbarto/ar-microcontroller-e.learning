import { TestBed } from '@angular/core/testing';

import { GraphicsEngineService } from './graphics-engine.service';

describe('GraphicsEngineService', () => {
  let service: GraphicsEngineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphicsEngineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
