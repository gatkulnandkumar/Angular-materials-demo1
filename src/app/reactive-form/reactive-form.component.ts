import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createForm()
  }

  ngOnInit(): void {

    this.userForm.valueChanges.subscribe((value) => {
      console.log('changed value', value)
    })
  }
  // firstName :FormControl;

  createForm() {
    this.userForm = this.fb.group({
      firstName: this.fb.control('', [Validators.required]),
      
      lastName: this.fb.control('', [Validators.required]),
      age: this.fb.control(0, [Validators.required]),
      email: this.fb.control('',    [Validators.required,
      Validators.email])
    });
  }
  submit() {
    console.log("Form Data is here===>",this.userForm);
  }
}
