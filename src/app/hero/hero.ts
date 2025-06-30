import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  @Input({ required: true }) data!: any[];

  weightLoss = 0;
  waistLoss = 0;
  stomachLoss = 0;
  thighLoss = 0;

  ngOnInit(): void {
    console.log('Value of data:', this.data);

    this.weightLoss = this.getLoss('Weight');
    this.waistLoss = this.getLoss('Waist');
    this.stomachLoss = this.getLoss('Stomach');
    this.thighLoss = this.getLoss('Thigh');
  }

  getLoss(name: string): number {
    const entry = this.data.find(d => d.name === name);
    if (entry && entry.data.length > 1) {
      const first = entry.data[0].measurement;
      const last = entry.data[entry.data.length - 1].measurement;
      return +(first - last).toFixed(1);
    }
    return 0;
  }
}
