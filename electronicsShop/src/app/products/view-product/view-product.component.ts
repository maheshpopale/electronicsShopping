import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
id:number;
pQuantity=1;
product:any;
  constructor(private activatedRoute:ActivatedRoute,private productsService:ProductsService,private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.id=data.id;
      console.log(this.id);
    });
    this.getProduct(this.id);
    this.productsService.getProductById(this.id).subscribe(data=>{
      this.product=data;
      console.log(this.product);
    });
  }
  getProduct(id:number){
    this.productsService.getProductById(id).subscribe(data=>{
      console.log(data);
    });
  }
  addtocart(product:any,pQuantity:number){
    this.cartService.addtoCart(product,pQuantity);
  }

}
