import { Injectable } from '@angular/core';

@Injectable()
export class HotKeywordApiService {

  HOT_KEYWORD_MOCK = [
    {
      no: 1,
      keyword: '김민희',
      thumbUp: 144
    },
    {
      no: 2,
      keyword: '홍상수',
      thumbUp: 213
    },
    {
      no: 3,
      keyword: '방예담',
      thumbUp: 426
    },
    {
      no: 4,
      keyword: '미나 뱀뱀',
      thumbUp: 216
    }
    
  ]

  constructor() { }
}
