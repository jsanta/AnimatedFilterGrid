import { Component, OnInit } from '@angular/core';
import { CompanyData, Company } from '../../data/company-data';

import filter from 'lodash-es/filter';
import findIndex from 'lodash-es/findIndex';
import includes from 'lodash-es/includes';
import pullAt from 'lodash-es/pullAt';

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.sass']
})
export class GridPageComponent implements OnInit {
  data: Array<Company> = CompanyData;
  animate: boolean = false;
  filteredData: Array<Company>;

  constructor() {

  }

  ngOnInit() {
    this.filteredData = this.data;
  }

  private activeFilters: Array<string> = [];
  resetFilters() {
    this.activeFilters = [];
    this.filteredData = this.data;
  }
  toggleFilter(_filter: string) {
    const filterIdx: number = findIndex(this.activeFilters, (v) => v === _filter );

    if (filterIdx !== -1) {
      pullAt(this.activeFilters, [ filterIdx ]);
    } else {
      this.activeFilters.push(_filter);
    }
    this.filteredData = filter(this.data, (v) => includes(this.activeFilters, v.color));
  }
  filterActive(filter: string): boolean {
    return includes(this.activeFilters, filter);
  }



}
