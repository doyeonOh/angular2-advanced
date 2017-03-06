import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchApiService } from './search-api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SearchApihModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SearchApihModule,
      providers: [
        SearchApiService
      ]
    };
  }
}
