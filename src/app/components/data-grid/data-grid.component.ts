import { Company } from './../../data/company-data';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.sass']
})
export class DataGridComponent implements OnInit {

  filteredData: Array<Company>;
  @Input()
  set data(data: Array<Company>) {
    this.filteredData = data;
    this.filterApplied = this.animate;
    // Uncomment the next line to have the animation for all records.
    // Keep commented if you prefer animating only new records (according to the selected filters)
    // this.applyFilterAnimation();
  };
  get data() {
    return this.filteredData;
  }

  _animate: boolean;
  @Input()
  set animate(animate: boolean) {
    this._animate = animate;
  };
  get animate() {
    return this._animate;
  }

  constructor() {}

  ngOnInit() {
    this.filteredData = this.data;
    console.log(this.filteredData);
  }

  filterApplied: boolean = false;
  private applyFilterAnimation(): void {
    setTimeout(() => this.filterApplied = false, 1500);
  }

}
