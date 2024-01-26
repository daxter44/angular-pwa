import { Component, OnDestroy, effect } from '@angular/core';
import { Subject, interval, switchMap, takeUntil } from 'rxjs';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [],
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.scss',
})
export class GaleryComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(public imageService: ImageService) {
    effect(() => {
      interval(30000)
        .pipe(
          takeUntil(this.destroy$),
          switchMap(() => this.imageService.getImage())
        )
        .subscribe();
    });
  }

  ngOnInit(): void {
    this.imageService.getImage().subscribe();
  }

  public image() {
    return this.imageService.image();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
