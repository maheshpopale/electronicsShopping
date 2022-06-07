import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ProductsListComponent,
    AddProductsComponent,
    UpdateProductComponent,
    ViewProductComponent,
    DeleteProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    AddProductsComponent,
    UpdateProductComponent,
    ViewProductComponent,
    ProductsListComponent,
    DeleteProductComponent
  ]
})
export class ProductsModule { }
