import { Component } from '@angular/core';
import {Filter} from "./filter.interface";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  filters: Filter[] = [
    {
      title: 'Region',
      content: ['Germany', 'Bulgaria', 'France', 'Slovakia']
    },
    {
      title: 'Producer',
      content: ['VP Brands International', 'Nestville Distillery']
    },
    {
      title: 'Brand',
      content: ['Nestville', 'Black Ram']
    },
    {
      title: 'Strength',
      content: ['40%', '38%']
    },
    {
      title: 'Type',
      content: ['Whiskey', 'Champagne']
    },
  ]
}
