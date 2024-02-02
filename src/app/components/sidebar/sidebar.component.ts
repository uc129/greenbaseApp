import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})


export class SidebarComponent {

  constructor() { }


  main_links = [

    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: '../../../assets/sidebar-icons/home.svg',
      // number: 0
    },

    {
      name: 'Orders',
      url: '/orders',
      icon: '../../../assets/sidebar-icons/list.svg',
      number: 16
    },
    {
      name: 'Products',
      url: '/products',
      icon: '../../../assets/sidebar-icons/tag.svg',
      // number: 24


    },
    {
      name: 'categories',
      url: '/categories',
      icon: '../../../assets/sidebar-icons/folder.svg',
      // number: 8

    },
    {
      name: 'Customers',
      url: '/customers',
      icon: '../../../assets/sidebar-icons/users.svg',
      number: 10
    },

    {
      name: 'Reports',
      url: '/reports',
      icon: '../../../assets/sidebar-icons/report.svg',
      number: 4
    },

    {
      name: 'Coupons',
      url: '/coupons',
      icon: '../../../assets/sidebar-icons/coupons.svg',
      // number: 2
    },

    {
      name: 'Inbox',
      url: '/inbox',
      icon: '../../../assets/sidebar-icons/message.svg',
      // number: 3
    }

  ]


  other_links = [{
    name: 'Knowledge Base',
    icon: '../../../assets/sidebar-icons/question.svg',
    url: '/help-outline'
  },

  {
    name: 'Product Updates',
    icon: '../../../assets/sidebar-icons/badge.svg',
    url: '/product-update'
  }
  ]


  settings_links = [
    {
      name: 'PersonalSettings',
      icon: '../../../assets/sidebar-icons/avatar.svg',
      url: '/user-settings'
    },

    {
      name: 'Global Settings',
      url: '/global-settings',
      icon: '../../../assets/sidebar-icons/settings.svg'
    }
  ]

}




