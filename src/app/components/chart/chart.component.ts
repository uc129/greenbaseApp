import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements AfterViewInit {

  chartData = {
    labels: ['NOON', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'],
    datasets: [
      {
        label: 'New Users',
        data: [1000, 1500, 900, 800, 1250, 1100, 1000, 1500, 900, 800, 1250, 1100],
      },
      {
        label: 'Returning Users',
        data: [400, 600, 300, 200, 500, 400, 400, 600, 300, 200, 500, 400],
      }
    ]
  }


  @ViewChild('users_chart') usersChart: ElementRef | undefined;


  private chart: Chart | undefined;





  ngAfterViewInit(): void {
    // console.log(this.usersChart)
    this.createChart();
  }



  createChart() {
    const ctx: CanvasRenderingContext2D = this.usersChart?.nativeElement.getContext('2d');
    // console.log(ctx);


    if (!ctx) return
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.chartData.labels,
        datasets: this.chartData.datasets
      }
    });

  }
};
