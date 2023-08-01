import { Component, Input } from '@angular/core';
import {Filter} from "../filter.interface";

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.css']
})
export class FilterItemComponent {
  @Input() filter?: Filter;


}
