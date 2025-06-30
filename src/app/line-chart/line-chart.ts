import { Component, Input, OnChanges } from '@angular/core';
// Angular Chart Component
import { AgCharts } from 'ag-charts-angular';
// Chart Options Type Interface
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-line-chart',
  imports: [AgCharts],
  styleUrl: './line-chart.scss',
  standalone: true,
  templateUrl: './line-chart.html',
})

export class LineChart implements OnChanges {
  @Input() data: any[] = [];

  options: AgChartOptions = {};

  ngOnChanges() {
    this.options = {
      data: this.data,
      series: [
        {
          type: 'line',
          xKey: 'date',
          yKey: 'measurement',
          // Optionally add label, marker, etc.
        }
      ]
    };
  }
}
