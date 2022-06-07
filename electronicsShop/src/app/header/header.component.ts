import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalItems: any;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.getproductsLength();
  }
  getproductsLength()
   {
     this.cartService.getProductsList().subscribe(res=>{
     this.totalItems=(res.length);
     console.log(res);
       })
   }

}
