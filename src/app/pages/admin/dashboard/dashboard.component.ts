import { Component } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';
import { SmallCardComponent } from '../../../components/small-card/small-card.component';
import { CommonModule } from '@angular/common';
import { ChartComponent } from '../../../components/chart/chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LayoutComponent, SmallCardComponent, CommonModule, ChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',

})
export class DashboardComponent {


  cardData = [
    {
      title: 'Existing Users',
      number: 16,
      percent: 22.45,
      increase: true,
    },
    {
      title: 'New Users Users',
      number: 6,
      percent: 15.34,
      increase: true,
    },
    {
      title: 'Total Visits',
      number: 489,
      percent: 18.25,
      increase: false,
    },
    {
      title: 'Unique Visitors',
      number: 112,
      percent: 10.24,
      increase: false,
    },
  ]




}
