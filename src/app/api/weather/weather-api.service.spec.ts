/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WeatherApiService } from './weather-api.service';

describe('WeatherApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherApiService]
    });
  });

  it('should ...', inject([WeatherApiService], (service: WeatherApiService) => {
    expect(service).toBeTruthy();
  }));
});
