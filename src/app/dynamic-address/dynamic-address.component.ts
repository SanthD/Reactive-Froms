import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
let emailRegex = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";


@Component({
  selector: 'app-dynamic-address',
  templateUrl: './dynamic-address.component.html',
  styleUrls: ['./dynamic-address.component.scss']
})
export class DynamicAddressComponent implements OnInit {

  // form!:FormGroup;
  // constructor(private fb: FormBuilder){}

  // ngOnInit(){
  //   this.form = this.fb.group({
  //     names:this.fb.array([]),
  //     mobile:'',
  //     addresses: this.fb.array([])
  //   });

  public usersForm: FormGroup | undefined;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.usersForm = this.fb.group({
      date: this.fb.control(new Date()),
      users: this.fb.array([
        this.fb.group({
          firstName: ['user 1', Validators.required],
          lastName: ['', Validators.required],
          email: ['', Validators.pattern(emailRegex)]
        }),
        this.fb.group({
          firstName: ['user 2', Validators.required],
          lastName: ['', Validators.required],
          email: ['',  Validators.pattern(emailRegex)]
        })
      ])
    })
  }

  removeFormControl(i:any) {
    let usersArray = this.usersForm?.controls.['users'] as FormArray;
    usersArray.removeAt(i);
  }

  addFormControl() {
    let usersArray = this.usersForm?.controls.['users'] as FormArray;
    let arraylen = usersArray.length;

    let newUsergroup: FormGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.pattern(emailRegex)]
    })

    usersArray.insert(arraylen, newUsergroup);
  }


  // }

  // addName(){
  //   (<FormArray>this.form.controls.names).push(new FormControl())

  // }

  // addAddress(){
  //   (<FormArray>this.form.controls['addresses']).push(this.getNewAddress());
  // }

  // getNewAddress(){
  //   return this.fb.group({
  //     pin: [],
  //     cities: this.fb.array([])
  //   });
  // }

  // addCity(index:any){
  //   (<FormArray>(<FormGroup>(<FormArray>this.form.controls['addresses']).controls[index]).controls.['cities']).push(new FormControl());
  // }

  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
    
  // }

  // constructor(private fb:FormBuilder){

  // }

}
