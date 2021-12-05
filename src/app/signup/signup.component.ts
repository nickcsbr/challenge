import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formSignUp: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private route: Router
    ) {}

  ngOnInit(): void {
    this.formSignUp = this.formBuilder.group({
      companyName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(35)]),
      segment: new FormControl(''),
      numberUsers: new FormControl(''),
      fullName: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit() {

    console.log(this.formSignUp);
    this.toastr.success('We have received your request', 'Thank You!');
    this.formSignUp.reset();
    this.route.navigate(['thankyou']);
  }

}
