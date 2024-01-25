import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  Observable,
  filter,
  first,
  interval,
  map,
  mergeMap,
  switchMap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  image = signal<string>('');

  constructor(private http: HttpClient) {}

  refreshImage() {
    this.getImage().subscribe();
    interval(15000)
      .pipe(switchMap(() => this.getImage()))
      .subscribe();
  }

  getImage() {
    return this.http
      .get('https://random.imagecdn.app/v1/image?width=500&height=150', {
        responseType: 'text',
      })
      .pipe(
        first(),
        filter(Boolean),
        map((response: any) => {
          console.log(response);
          this.image.set(response);
        })
      );
  }
}
