import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }
  

  getProducts(){
    return this.httpClient.get('https://localhost:44341/api/products');
  }
  getProductById(id:number){
    return this.httpClient.get('https://localhost:44341/api/products/'+id);
  }

  addProduct(product:any):Observable<any>{
    console.log(product);
    const headers = { 'content-type': 'application/json'};
    return this.httpClient.post('https://localhost:44341/api/products',product,{headers:headers});
  }

  updateProduct(product:any){
    return this.httpClient.put('http://localhost:3000/products/',product);
  }

  deleteProduct(id:number){
    return this.httpClient.delete('http://localhost:3000/products/'+id);
  }
  
}
