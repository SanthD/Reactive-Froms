## Reactive Forms
import  ReactiveFormsModule in app.module.ts

## How to create a reactive first Forms
import FormControl first into component

then create new instance with formControl

Syntax : 

[formcontrolname]  = new FormControl('');

then bind with [formControl] = [formcontrolname]

## How to create a FormGroup 

import FormGroup first into component

 profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

## How to create a nested formGroup

profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

##  How to create a From using fromBuilder Service 

import FormBuilder first into component


profileForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl('')
});

## How to Deal with nested ones

profileForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  address: new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl('')
  })
});

## Error Handling
To implement validtions 
import Validators from @angular/froms




 





## how to use setValue function
Bind the any custom-event-handler with any DOM event 
ex: 
updateName(){
    <'formControlReference'>.setValue('value')
  }