import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
users:any=[];
  signupform:FormGroup
  constructor(private formBuilder:FormBuilder,private usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(data=>{
      this.users=data;
      console.log(this.users);
    })
    this.signupform=this.formBuilder.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      emailAdd:['',[Validators.required,Validators.email]],
      gender:['',[Validators.required]],
      mobileNo:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      address:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]]
    });
  }
  postData(){
    const user={
      Id:4,
      firstName:"Rahul",
      lastName:"Pere",
      email:"rahulpere@gmail.com",
      gender:"Male",
      mobile:9987867567,
      address:"Mumbai",
      password:"rahulpere@123"
  };
    console.log(this.signupform.value);
    this.usersService.postUsers(user).subscribe(data=>{
      console.log(data);
    });
  }

}
