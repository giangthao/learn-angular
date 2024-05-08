import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
      selector: 'app-images-slider',
      templateUrl: './images-slider.component.html',
      styleUrl: './images-slider.component.scss',
})
export class ImagesSliderComponent {
      @Input() imagesArray!: string[];
      @ViewChild('imageContainer') imageContainer!: ElementRef;

      sliderIndex: number = 0;
      showSlider: boolean = false;

      previousSlide() {
            if (this.sliderIndex === 0) return;
            this.sliderIndex = this.sliderIndex - 1;
            this.scrollToThumbnail();
      }

      nextSlide() {
            if (this.sliderIndex === this.imagesArray.length - 1) return;
            this.sliderIndex = this.sliderIndex + 1;
            this.scrollToThumbnail();
      }

      currentSlide(n: number) {
            this.sliderIndex = n;
            this.scrollToThumbnail();
      }

      setShowSlider() {
            this.showSlider = true;
      }

      hiddenSlider() {
            this.showSlider = false;
      }

      setShowInCurrentSlide(n: number) {
            this.showSlider = true;
            this.sliderIndex = n;
            this.scrollToThumbnail();
      }

      scrollToThumbnail() {
            const thumbnails = this.imageContainer.nativeElement;
            const thumbnail = thumbnails.children[this.sliderIndex] as HTMLElement;

            thumbnail.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
}
