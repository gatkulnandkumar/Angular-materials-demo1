import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  myForm!: FormGroup; // Define myForm property
  uidaiControl!: FormControl;
  otpControl!: FormControl;
  hide = true;
  private readonly key = 'my-secret-key';
  generatedOtp: string | undefined;
  // , private http: HttpClient
  constructor(private fb: FormBuilder) { 
    this.uidaiControl = this.fb.control('', [Validators.required, Validators.pattern('[0-9]{8}')]);
    this.otpControl = this.fb.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]);

    this.myForm = this.fb.group({
      uidai: ['', [Validators.required, Validators.pattern(/^\d{12}$/)]],
      otp: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });
  }
  ngOnInit(): void {
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Encrypt the form data using AES encryption
      const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(this.myForm.value), this.key).toString();
      console.log("Encrypted Data: ", encryptedData);

      // Decrypt the encrypted data for testing purposes only
      const decryptedData = CryptoJS.AES.decrypt(encryptedData, this.key).toString(CryptoJS.enc.Utf8);
      console.log("Decrypted Data: ", decryptedData);

      window.alert('Form submitted successfully!');
    } else {
      window.alert('Please fill all the required fields.');
    }
  }

  onBlur(control: FormControl) {
    if (control.invalid && (control.dirty || control.touched)) {
      control.markAsUntouched();
      control.markAsPristine();
    }
  }
  onAadharNumberInput() {
    var digits = '0123456789';
    var otpLength = 6;
    var otp = '';
    for (let i = 0; i < otpLength; i++) {
      var index = Math.floor(Math.random() * digits.length);
      otp += digits[index];
    }
    this.generatedOtp = otp;
    window.alert('Otp sent successfully!');
   console.log("Otp is ",this.generatedOtp);
   
  }
}
