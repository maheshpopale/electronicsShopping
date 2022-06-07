import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products:any=[];
  pQuantity:number=0;
  constructor(private productsService:ProductsService,private cartService:CartService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data=>{
      this.products=data;
      console.log(this.products);
    });
  }
  addCart(product:any,pQuantity:number){
    console.log(product);
    this.cartService.addtoCart(product,pQuantity);

  }
}
