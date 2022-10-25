import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination} from 'swiper';

SwiperCore.use([
  Navigation, 
  Pagination, 
]);
@Component({
  selector: 'app-indicate-now',
  templateUrl: './indicate-now.component.html',
  styleUrls: ['./indicate-now.component.scss']
})
export class IndicateNowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
