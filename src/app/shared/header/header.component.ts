import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  menuLinks = [
    {
      id: 1, 
      name: 'Home',
      link: '/',
      children: null
    },
    {
      id: 2,
      name: 'About',
      link: '/about',
      children: null
    },
    {
      id: 3,
      name: 'Media',
      link: '/media',
      children: null
    },
    {
      id: 4,
      name: 'Gallery',
      link: '/gallery',
      children: null
    },
    {
      id: 5,
      name: 'Donate',
      link: '/donate',
      children: null
    },
    {
      id: 6,
      name: 'Contact',
      link: '/contact',
      children: null
    }
]
}
