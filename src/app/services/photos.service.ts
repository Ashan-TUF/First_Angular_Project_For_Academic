import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { Photo } from "../dto/Photo";
import { PhotosDto } from "../dto/PhotosDto";
import { map } from 'rxjs/operators'; // Import RxJS map operator

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private baseUrl: string = environment.baseUrl;

  constructor(private _http: HttpClient) {}

  findAllPhotos(): Observable<PhotosDto[]> {
    return this._http.get<Photo[]>(`${this.baseUrl}/photos`).pipe(
      map((photos: Photo[]) => photos.map(ph =>
        new PhotosDto(ph.albumId, ph.id, ph.title, ph.thumbnailUrl, ph.url)
      ))
    );
  }

  findAllComments(): Observable<any> {
    return this._http.get(`${this.baseUrl}/comments`);
  }
}
