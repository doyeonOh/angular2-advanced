import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherApiService } from './weather-api.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class WeatherApiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WeatherApiModule,
      providers: [
        WeatherApiService
      ]
    };
  }
}
