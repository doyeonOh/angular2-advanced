import { Injectable } from '@angular/core';

@Injectable()
export class WeatherApiService {

  WEATHER_MOCK = [
    {
      region: '서울',
      wheatherName: '맑음',
      wheatherCode: 'imw01',
      temperature: 12.2,
      microDust: 53,
      microDustStatus: '보통'
    },
    {
      region: '부산',
      wheatherName: '비',
      wheatherCode: 'imw02',
      temperature: 7.2,
      microDust: 20,
      microDustStatus: '쾌청'
    },
    {
      region: '제주',
      wheatherName: '흐림',
      wheatherCode: 'imw03',
      temperature: 10.2,
      microDust: 120,
      microDustStatus: '위험'
    }
  ];

  constructor() { }

}
