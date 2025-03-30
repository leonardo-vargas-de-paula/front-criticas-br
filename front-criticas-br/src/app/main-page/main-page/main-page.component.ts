import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { MovieCarouselComponent } from '../movie-carousel/movie-carousel.component';

@Component({
  selector: 'app-main-page',
  imports: [CardComponent, MovieCarouselComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
