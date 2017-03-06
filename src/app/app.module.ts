import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { TabComponent } from './tab/tab.component';
import { TabContentComponent } from './tab-content/tab-content.component';
import { NewsListComponent } from './news-list/news-list.component';
import { HotKeywordComponent } from './hot-keyword/hot-keyword.component';
import { PhotoNewsSlidesComponent } from './photo-news-slides/photo-news-slides.component';
import { WeatherComponent } from './weather/weather.component';
import { ApiModule } from './api/api.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBoxComponent,
    TabComponent,
    TabContentComponent,
    NewsListComponent,
    HotKeywordComponent,
    PhotoNewsSlidesComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
