import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
products:any=[];
public grandTotal:number=0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProductsList().subscribe(data=>{
      this.products=data;
    });
    this.grandTotal=this.cartService.getTotalPrice();
  }
  decrease(product:any){
    if(product.pQuantity <=1)
    return;
    else
    product.pQuantity--;
  }
  increase(product:any){
    if(product.pQuantity >=5)
    return;
    else{
      product.pQuantity++;
    }

  }
  remove(item:any){
    this.cartService.removeCartItem(item);
  }
  emptyCart(){
    this.cartService.removeAllCart();
  }

}
