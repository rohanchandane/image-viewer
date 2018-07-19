import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Image } from './image';

export const IMAGE_API = 'http://jsonplaceholder.typicode.com/photos';

@Injectable({
  providedIn: 'root'
})
export class ViewerService {

  constructor(private http: HttpClient) { }

  getImages(): Observable<any> {
    return this.http.get(IMAGE_API);
  }
}
