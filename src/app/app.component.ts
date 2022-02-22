import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'rect-form';

  // person:object = [
  //   {
  //     "name":"",
  //     "email":"",
  //     "aleterEmail":"",
  //     "address":{
  //       "steert":"",
  //       "city":""
  //     },
  //     "altrAddress":{
  //       "steert":"",
  //       "city":""
  //     },
  //   }
  // ]

constructor(private fb:FormBuilder){}

name = new FormControl('',Validators.required);

  userForm = new FormGroup({
    userName : new FormControl('',[Validators.required,Validators.minLength(6)]),
    password: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state:new FormControl(''),
      zipcode:new FormControl('')
    }) 
  });

  studentForm = this.fb.group({
    userName : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(6)]],
    password: '',
    // address: this.fb.group({
    //   city: '',
    //   state:'',
    //   zipcode:''
    // }) 
  });

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userForm
  } 

  OnSubmit(){
    console.log(this.userForm.value, this.studentForm.value)
  }



}
