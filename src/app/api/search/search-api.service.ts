import { Injectable } from '@angular/core';

@Injectable()
export class SearchApiService {

  constructor() { }


  search(keyword: string) {
    alert('잠시 후에 다시 시도해주세요[' + keyword + ']');
    return null;
  }
}
