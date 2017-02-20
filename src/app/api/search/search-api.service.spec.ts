/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SearchApiService } from './search-api.service';

describe('SearchApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchApiService]
    });
  });

  it('should ...', inject([SearchApiService], (service: SearchApiService) => {
    expect(service).toBeTruthy();
  }));
});
