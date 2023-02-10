import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class FileService {




  
  constructor(private http: HttpClient) { }

  SaveFile(filesToUpload) {
    let formData = new FormData();
    for (let file of filesToUpload) {
      formData.append("avatar", file);
    }

    return this.http.post("http://localhost:3000/file", formData);
  }


}
