import { NgModule } from '@angular/core';
import { NewsApiModule } from './news/news-api.module';
import { HotKeywordApiModule } from './hot-keyword/hot-keyword-api.module';
import { SearchApihModule } from './search/search-api.module';
import { WeatherApiModule } from './weather/weather-api.module';

@NgModule({
  imports: [
    NewsApiModule.forRoot(),
    HotKeywordApiModule.forRoot(),
    SearchApihModule.forRoot(),
    WeatherApiModule.forRoot()
  ]
})
export class ApiModule {
}
