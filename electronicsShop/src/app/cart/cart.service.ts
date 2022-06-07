import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:any=[];
  public productList=new BehaviorSubject<any>([]);
  constructor() { }

  getProductsList(){
    return this.productList.asObservable();
  }
  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  
  addtoCart(product:any,pQuantity){
    const _product={product:product,pQuantity:pQuantity};
    console.log(_product);
    this.cartItemList.push(_product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }
  getTotalPrice() {
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      const q:number=parseInt(a.pQuantity);
      console.log(q);
      grandTotal+=a.product.productPrice*q;
    });
    return grandTotal;
  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id==a.id)
      {
        this.cartItemList.splice(index,1);
      }
    });
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }
  
}
