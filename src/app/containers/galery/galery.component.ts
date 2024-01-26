import { Component, effect } from '@angular/core';
import { interval, switchMap } from 'rxjs';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [],
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.scss',
})
export class GaleryComponent {
  constructor(public imageService: ImageService) {
    effect((oncleanup) => {
      const refreshImage = interval(30000)
        .pipe(switchMap(() => this.imageService.getImage()))
        .subscribe();
      oncleanup(() => refreshImage.unsubscribe());
    });
  }

  ngOnInit(): void {
    this.imageService.getImage().subscribe();
  }

  public image() {
    return this.imageService.image();
  }
}
