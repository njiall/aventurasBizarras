import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  form: FormGroup;
  name: FormControl = new FormControl('', [Validators.required]);
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  message: FormControl = new FormControl('', [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl(''); // we will use this to prevent spam
  submitted = false; // show and hide the success message
  isLoading = false; // disable the submit button if we're loading
  responseMessage: string; // the response message to show to the user
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.form.status === 'VALID' && this.honeypot.value === '') {
      this.form.disable(); // disable the form if it's valid to disable multiple submissions
      const formData: any = new FormData();
      formData.append('name', this.form.get('name').value);
      formData.append('email', this.form.get('email').value);
      formData.append('message', this.form.get('message').value);
      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits
      this.http.post('https://script.google.com/macros/s/AKfycby1o2dOWVJGhjY9Gi46Cksgo8uFlkoJ5muNgzYgf6RpsdWa9q1_1XSwCww40MELGxvjfQ/exec', formData).subscribe(
        (response) => {
          // choose the response message
          if (response['result'] === 'success') {
            this.responseMessage = 'Gracias por tu mensaje';
          } else {
            this.responseMessage = 'Se ha producido un error';
          }
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(response);
        },
        (error) => {
          this.responseMessage = 'Se ha producido un error';
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(error);
        }
      );
    }
  }
}
