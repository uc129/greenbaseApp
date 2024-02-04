import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';
import { isPlatformBrowser } from "@angular/common";

import { OnInit } from '@angular/core';

import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  isBrowser: boolean | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'],

    datasets: [
      {
        data: [1000, 1400, 1700, 200, 1800, 1500, 1300, 1200, 1100, 1000, 900, 800, 2000,],
        label: 'New Users',
        fill: true,
        tension: 0,
        borderColor: '#21fa59',
        backgroundColor: 'transparent',
        borderWidth: 4

      },
      {
        data: [300, 400, 500, 300, 700, 600, 500, 400, 300, 200, 100, 0],
        label: 'Unique Users',
        fill: true,
        tension: 0,
        borderColor: '#1a29fa',
        backgroundColor: 'transparent',
        borderWidth: 4

      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {

    plugins: {
      title: {
        display: true,
        text: 'Unique visits over time',
        align: 'start',
        position: 'top',
        color: '#000',
        fullSize: true,
        font: {
          size: 18,
          weight: 'bold',
          family: 'Arial',
          style: 'normal',
          lineHeight: 1.2,
        },
      },
      legend: {
        display: true,
        align: 'start',
        position: 'top',
        fullSize: true,
      },
    },



    scales: {
      x: {
        grid: {
          display: false
        },
      },
      y: {

        grid: {
          display: true,
          lineWidth: 1,
        },
        border: {
          dash: [3, 3]
        }
      }
    },
    layout: {
      padding: {

        bottom: 20,
      },
      // autoPadding: true,

    },
    elements: {
      point: {
        radius: 1,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      },
      line: {
        borderWidth: 1,
        borderCapStyle: 'round',
        borderJoinStyle: 'round',

      },
    },

    responsive: true,
    aspectRatio: 1.5,

  };

  public lineChartLegend = true;



}


