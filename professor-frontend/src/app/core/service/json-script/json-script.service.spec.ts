import { TestBed } from '@angular/core/testing';

import { JsonScriptService } from './json-script.service';

describe('JsonScriptService', () => {
  let service: JsonScriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonScriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
