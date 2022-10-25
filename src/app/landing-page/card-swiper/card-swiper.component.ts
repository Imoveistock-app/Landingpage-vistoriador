import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination} from 'swiper';

SwiperCore.use([
  Navigation, 
  Pagination, 
]);
@Component({
  selector: 'app-card-swiper',
  templateUrl: './card-swiper.component.html',
  styleUrls: ['./card-swiper.component.scss']
})
export class CardSwiperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
