import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/categories/category.service';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
categories:any=[];
  productform:FormGroup;
  imagePreview: string;
  filename: string;
  constructor(private formBuilder:FormBuilder,private categoryService:CategoryService,private productsService:ProductsService) { }

  ngOnInit(): void {
    this.productform=new FormGroup({
      productName:new FormControl(null,{validators:Validators.required}),
      productCategory:new FormControl(null,{validators:[Validators.required]}),
      productQuantity:new FormControl({Validators:[Validators.required]}),
      productPrice:new FormControl({Validators:[Validators.required]}),
      productDescription:new FormControl({Validators:[Validators.required]}),
      image:new FormControl({Validators:[Validators.required]})
  });
  this.categoryService.getCategories().subscribe(data=>{
    this.categories=data;
  });
  
}
  
  handleImageFile(e:Event){
    const file = (<HTMLInputElement>e.target).files[0];
    this.filename=file.name;
    console.log(file);
    console.log(this.filename);
    this.productform.patchValue({image:file})
    this.productform.get('image').updateValueAndValidity();
   const reader=new FileReader();
   reader.onload=()=>{
     this.imagePreview=reader.result as string;
   };
   reader.readAsDataURL(file);
   }

   addProduct(){
     const image="../../../assets/"+this.filename;
     this.productform.patchValue({image:image});
     const product=
     {
       productName:this.productform.value.productName,
       productQuantity:this.productform.value.productQuantity,
       productPrice:this.productform.value.productPrice,
       productDescription:this.productform.value.productDescription,
       image:this.productform.value.image,
       CategoryId:this.productform.value.productCategory
    };
     //console.log(product);
    this.productsService.addProduct(product).subscribe(data=>{
      console.log(data);
    });
   }

}
