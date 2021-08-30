import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  uploadImage(file): Observable<string> {
    const formData = new FormData();
    formData.append('downloadImage', file, file.name)
    return this.http.post(`api/file`, formData, { responseType: 'text' });
  }
}
