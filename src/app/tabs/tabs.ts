import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChart } from '../line-chart/line-chart';

@Component({
  selector: 'app-tabs',
  standalone: true,
  templateUrl: './tabs.html',
  imports: [CommonModule, LineChart],
})

export class Tabs {
  activeTab = "Weight";
  @Input() data = [{"name": "", "unit": "", "data": []}];

  weightData = [
    {
      'date': '11-01-2025',
      'measurement': 69.9
    },
    {
      'date': '22-01-2025',
      'measurement': 70.1
    },
    {
      'date': '29-01-2025',
      'measurement': 69.7
    },
    {
      'date': '05-02-2025',
      'measurement': 69.3
    },
    {
      'date': '12-02-2025',
      'measurement': 69.5
    },
    {
      'date': '19-02-2025',
      'measurement': 69.2
    },
    {
      'date': '26-02-2025',
      'measurement': 68.3
    },
    {
      'date': '06-03-2025',
      'measurement': 67.9
    },
    {
      'date': '12-03-2025',
      'measurement': 67.6
    },
    {
      'date': '19-03-2025',
      'measurement': 67.5
    },
    {
      'date': '26-03-2025',
      "measurement": 67.6
    }
  ];
  waistData = [
    {
      'date': '11-01-2025',
      'value': 69.9
    },
    {
      'date': '22-01-2025',
      'value': 70.1
    },
    {
      'date': '29-01-2025',
      'value': 69.7
    },
    {
      'date': '05-02-2025',
      'value': 69.3
    },
    {
      'date': '12-02-2025',
      'value': 69.5
    },
    {
      'date': '19-02-2025',
      'value': 69.2
    },
    {
      'date': '26-02-2025',
      'value': 68.3
    },
    {
      'date': '06-03-2025',
      'value': 67.9
    },
    {
      'date': '12-03-2025',
      'value': 67.6
    },
    {
      'date': '19-03-2025',
      'value': 67.5
    },
    {
      'date': '26-03-2025',
      "value": 67.6
    }
  ];
  stomachData = [
    {
      'date': '11-01-2025',
      'value': 69.9
    },
    {
      'date': '22-01-2025',
      'value': 70.1
    },
    {
      'date': '29-01-2025',
      'value': 69.7
    },
    {
      'date': '05-02-2025',
      'value': 69.3
    },
    {
      'date': '12-02-2025',
      'value': 69.5
    },
    {
      'date': '19-02-2025',
      'value': 69.2
    },
    {
      'date': '26-02-2025',
      'value': 68.3
    },
    {
      'date': '06-03-2025',
      'value': 67.9
    },
    {
      'date': '12-03-2025',
      'value': 67.6
    },
    {
      'date': '19-03-2025',
      'value': 67.5
    },
    {
      'date': '26-03-2025',
      "value": 67.6
    }
  ];
  thighData = [
    {
      'date': '11-01-2025',
      'measurement': 69.9
    },
    {
      'date': '22-01-2025',
      'measurement': 70.1
    },
    {
      'date': '29-01-2025',
      'measurement': 69.7
    },
    {
      'date': '05-02-2025',
      'measurement': 69.3
    },
    {
      'date': '12-02-2025',
      'measurement': 69.5
    },
    {
      'date': '19-02-2025',
      'measurement': 69.2
    },
    {
      'date': '26-02-2025',
      'measurement': 68.3
    },
    {
      'date': '06-03-2025',
      'measurement': 67.9
    },
    {
      'date': '12-03-2025',
      'measurement': 67.6
    },
    {
      'date': '19-03-2025',
      'measurement': 67.5
    },
    {
      'date': '26-03-2025',
      "measurement": 67.6
    }
  ];


  changeTab(newTab: string): void {
    this.activeTab = newTab;
    console.log('data', this.data[0].data);
    console.log('weightData', this.weightData);
  }
}
