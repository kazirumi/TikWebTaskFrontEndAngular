import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ProductFormForSave:Product=new Product();
  fileToUpload:FileList=null;

  readonly rootURL = 'http://localhost:3000/product/';
  constructor(private http: HttpClient) { }

  getAllCategory(){
    return this.http.get("http://localhost:3000/category");
  }
  getAllVariant(){
    return this.http.get("http://localhost:3000/variant");
  }
  getAllProduct() {
    return this.http.get(this.rootURL);
  }
  
}
