import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  chartData: Array<any>;
  pieData: any;
  value: string;

  constructor() { }

  ngOnInit() {
    // give everything a chance to get loaded before starting the animation to reduce choppiness
    setTimeout(() => {
      this.generateData();

      // change the data periodically
      setInterval(() => this.generateData(), 10000);
    }, 1000);
  }

  generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `User ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
    this.pieData = {
      fail: Math.floor(Math.random() * 10),
      notfinish: Math.floor(Math.random() * 10),
      pass: Math.floor(Math.random() * 10)
    };
  }
}
