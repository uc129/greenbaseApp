import { Component, NgModule } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';
import { SmallCardComponent } from '../../../components/small-card/small-card.component';
import { CommonModule } from '@angular/common';
import { ChartComponent } from '../../../components/chart/chart.component';
import { ListComponent } from '../../../components/list/list.component';
import { CardMediumComponent } from '../../../components/card-medium/card-medium.component';






@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    LayoutComponent, SmallCardComponent, CommonModule,
    ChartComponent, ListComponent, CardMediumComponent
  ],
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



  listData = {
    data: [
      { image: '../../../assets/images/avatars/leroy.svg', name: 'Leroy Wise', sold: 48, amount: 25 },
      { image: '../../../assets/images/avatars/sean.svg', name: 'Sean Hill', sold: 42, amount: 25 },
      { image: '../../../assets/images/avatars/lottie.svg', name: 'Lottie Gray', sold: 34, amount: 25 },
      { image: '../../../assets/images/avatars/sadie.svg', name: 'Sadie Ramsey', sold: 28, amount: 25 },
      { image: '../../../assets/images/avatars/floyd.svg', name: 'Floyd Pearson', sold: 26, amount: 25 },

    ],
    columns: ["Name", '', 'Sold', 'Amount']
  }


  mediumCardData = [
    {
      title: 'Collections Sold',
      meta: [
        {
          name: 'Men',
          value: 10,
        },
        {
          name: 'Women',
          value: 8,
        },
        {
          name: 'Kids',
          value: 7,
        },
      ],
      progress: '45'
    },
    {
      title: 'Returned Items',
      progress: '67',

      meta: [
        {
          name: 'This Month',
          value: 38,
        },
        {
          name: 'Last Month',
          value: 12,
        },
        {
          name: 'All Time',
          value: 20,
        },
      ]

    }
  ]




}
