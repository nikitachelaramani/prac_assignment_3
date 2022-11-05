import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  url ="http://localhost:9000"
  public addProduct(product:Product){
     return this.http.post(`${this.url}/Product-add/`,product)
  }
  public getProducts(){
    return this.http.get(`${this.url}/Product-list`)
  }
  public deleteProducts(id){
    return this.http.delete(`${this.url}/Product-delete/${id}`);
  }
  public getProduct(id)
  {
      return this.http.get(`${this.url}/Get-Product/${id}`)
  }
  public dd()
  {
    return this.http.get(`${this.url}/dd`);
  }
  public updProduct(Product:any){
    return this.http.put(`${this.url}/Product-edit/`+Product._id,Product)
  }
  urlcat= "http://localhost:9000/cat/"
  public getallCategory()
  {
    return this.http.get(`${this.urlcat}`)
  }
  

}
