import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotKeywordApiService } from './hot-keyword-api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class HotKeywordApiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HotKeywordApiModule,
      providers: [
        HotKeywordApiService
      ]
    };
  }
}
