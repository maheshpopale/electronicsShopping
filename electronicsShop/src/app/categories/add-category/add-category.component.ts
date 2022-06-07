import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryForm=this.formBuilder.group(
    {
    categoryName:['',[Validators.required]],
    categoryDescription:['',[Validators.required]]
    }

  );
  this.categoryService.getCategories().subscribe(data=>{
    console.log(data);
  })

  }
  postData(){

  }

}
