import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  selectedIndex = 0;
  images = [
    'https://picsum.photos/800/300?random=1',
    'https://picsum.photos/800/300?random=2',
    'https://picsum.photos/800/300?random=3',
  ];

  constructor() {

  }

  ngOnInit() {

  }
}
