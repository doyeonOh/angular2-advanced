import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsApiService } from './news-api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class NewsApiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NewsApiModule,
      providers: [
        NewsApiService
      ]
    };
  }
}
