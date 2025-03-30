import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-movie-carousel',
  imports: [CardComponent],
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.css'
})
export class MovieCarouselComponent {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef<HTMLDivElement>;


  scrollLeft() {
    if (this.carousel) {
      this.carousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  scrollRight() {
    if (this.carousel) {
      this.carousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }

}