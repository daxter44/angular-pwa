import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, first, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  image = signal<string>('');

  constructor(private http: HttpClient) {}

  getImage() {
    return this.http
      .get('https://random.imagecdn.app/v1/image?width=500&height=150', {
        responseType: 'text',
      })
      .pipe(
        first(),
        filter(Boolean),
        map((response: any) => {
          this.image.set(response);
        })
      );
  }
}
