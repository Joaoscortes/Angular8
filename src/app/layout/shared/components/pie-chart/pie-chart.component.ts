import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  @ViewChild('chart', { static: true }) private chartContainer: ElementRef<HTMLElement>;
  public data: any = { fail: 2, notfinish: 4, pass: 9 };
  private margin: any = { top: 20, bottom: 20, left: 20, right: 20 };
  private width = 400;
  private height = 400;

  private radius: any;
  private svg: any;
  private color: any;
  private pie: any;
  private dataReady: any;

  constructor() { }

  ngOnInit() {
    this.draw();
  }

  draw() {
    const element = this.chartContainer.nativeElement;
    this.radius = Math.min(this.width, this.height) / 2 - this.margin.top;

    this.svg = d3.select(element)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr('transform', 'translate(' + this.width / 2 + ',' +
        this.height / 2 + ')');

    this.color = d3.scaleOrdinal()
      .domain(this.data)
      .range(['red', 'blue', 'green']);

    // Compute the position of each group on the pie:
    this.pie = d3.pie()
      .value((d: any) => d.value);

    this.dataReady = this.pie(d3.entries(this.data));

    this.svg
      .selectAll('whatever')
      .data(this.dataReady)
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(100)
        .outerRadius(this.radius))
      .attr('fill', (d) => (this.color(d.data.key)))
      .attr('stroke', 'black')
      .style('stroke-width', '2px');
  }
}
