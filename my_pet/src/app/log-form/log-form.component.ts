import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})

export class LogFormComponent implements OnInit {
  myForm: FormGroup;
  selectedValue: string = '';
  constructor(private fb: FormBuilder, private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.selectedValue = data.selectedValue;
    this.myForm = this.fb.group({
      NameH: ['', Validators.required],
      RegionH: ['', Validators.required],
      PhoneH: ['', [Validators.required, Validators.pattern(/^[0-9]{8}$/)]],
      EmailH: ['', [Validators.required, Validators.email]],
      AddressH: ['', Validators.required]
    });
  }

  ngOnInit() {
   this.myForm.controls['RegionH'].setValue(this.selectedValue);
  }

  onSubmit() {
    console.log('Form data: ', this.myForm.value);

    if (this.myForm.invalid) {
      if (this.myForm.controls['NameH'].errors?.['required']) {
        alert('Please fill in your Name.');
      } else if (this.myForm.controls['RegionH'].errors?.['required']) {
        alert('Please fill in your Region.');
      } else if (this.myForm.controls['PhoneH'].errors?.['required']) {
        alert('Please fill in your Phone number.');
      } else if (this.myForm.controls['PhoneH'].errors?.['pattern']) {
        alert('Invalid Phone number format. Please enter a 8-digit phone number.');
      } else if (this.myForm.controls['EmailH'].errors?.['required']) {
        alert('Please fill in your Email.');
      } else if (this.myForm.controls['EmailH'].errors?.['email']) {
        alert('Invalid Email format. Please enter a valid email address.');
      } else if (this.myForm.controls['AddressH'].errors?.['required']) {
        alert('Please fill in your Address.');
      }
      return;
    }

    const formData = new FormData();
    if (this.myForm.valid) {
    formData.append('NameH', this.myForm.value.NameH);
    formData.append('RegionH', this.myForm.value.RegionH);
    formData.append('PhoneH', this.myForm.value.PhoneH);
    formData.append('EmailH', this.myForm.value.EmailH);
    formData.append('AddressH', this.myForm.value.AddressH);
    this.http.post('http://localhost/mypet/logform.php', formData).subscribe(
    (response) => {
      console.log(response);
      alert('Form submitted successfully!');
      location.reload();
    },
    (error) => {
      console.log(error);
      if (error.error.text === 'New record created successfully') {
        alert('Form submitted successfully!');
        location.reload();
      } else {
        alert('An error occurred while submitting the form. Please try again later.');
        location.reload();
      }
    }
  );
  }
  }}