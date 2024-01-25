import { Component } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [],
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.scss',
})
export class GaleryComponent {
  constructor(public imageService: ImageService) {}

  ngOnInit(): void {
    this.imageService.refreshImage();
  }

  public image() {
    return this.imageService.image();
  }
}
