import { Component, OnInit } from '@angular/core';
import { SearchApiService } from './../../api/search/search-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _searchApi: SearchApiService
  ) { }

  ngOnInit() {
  }


  doSearch(e: any): void {
    let keyword = e.target.value;
    this._searchApi.search(keyword);
  }
}
