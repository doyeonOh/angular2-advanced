import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './content/header/header.component';
import { SearchBoxComponent } from './content/search-box/search-box.component';
import { TabComponent } from './content/tab/tab.component';
import { TabContentComponent } from './content/tab-content/tab-content.component';
import { NewsListComponent } from './content/news-list/news-list.component';
import { HotKeywordComponent } from './content/hot-keyword/hot-keyword.component';
import { PhotoNewsSlidesComponent } from './content/photo-news-slides/photo-news-slides.component';
import { WeatherComponent } from './content/weather/weather.component';
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
