import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart/cart.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { AddProductsComponent } from './products/add-products/add-products.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'about',component:AboutusComponent},
  {path:'signup',component:SignUpComponent},
  {path:'signin',component:SignInComponent},
  {path:'addcategory',component:AddCategoryComponent},
  {path:'products',component:ProductsListComponent},
  {path:'viewproduct/:id',component:ViewProductComponent},
  {path:'cart',component:CartComponent},
  {path:'addproduct',component:AddProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
