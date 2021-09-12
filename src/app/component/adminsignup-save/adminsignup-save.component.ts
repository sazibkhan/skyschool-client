import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AdminSignUpApiService} from "../../service/adminSignUp.api.service";

@Component({
  selector: 'app-adminsignup-save',
  templateUrl: './adminsignup-save.component.html',
  styleUrls: ['./adminsignup-save.component.css']
})
export class AdminsignupSaveComponent implements OnInit {
  signUpForm!: FormGroup;
  submitted = false;
  show!: boolean;
  serverError = '';

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private adminSignUpApiService: AdminSignUpApiService) {
  }

  public ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      adminName: ['', Validators.required],
      adminEmail: ['', Validators.required],
      password: ['', Validators.required],
      adminPhone: ['', Validators.required],
      gender: ['', Validators.required],
      orgName: ['', Validators.required]
    });

  }

  get f() {
    return this.signUpForm.controls;
  }

  public onSubmit() {

    this.submitted = true;
        if (this.signUpForm.invalid) {
        }
    this.adminSignUpApiService.adminSignUpService(
        this.f.adminName.value,
        this.f.adminEmail.value,
        this.f.password.value,
        this.f.adminPhone.value,
        this.f.gender.value)
      .subscribe(
        data => {
          this.router.navigate(['/adminGetList']);
        },
        error => {
          if (error.status === 500) {
            this.serverError = 'Already taken Sign Up in successfully';
          }
        });



  }


}
