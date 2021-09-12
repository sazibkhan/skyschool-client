import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminSignUpApiService} from "../../service/adminSignUp.api.service";

@Component({
  selector: 'app-adminsignup-update-profile',
  templateUrl: './adminsignup-update-profile.component.html',
  styleUrls: ['./adminsignup-update-profile.component.css']
})
export class AdminsignupUpdateProfileComponent implements OnInit {
  adminUpdateForm!: FormGroup;
  submitted = false;
  show!: boolean;
  serverError = '';
  adminId! : string ;
  adminList: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private  signUpApiService : AdminSignUpApiService) {

              this.route.params.subscribe(params => {

              this.adminId = this.route.snapshot.params['id'];
       });
  }

  public ngOnInit(): void {
    alert(this.adminId);
     this.adminUpdateForm = this.formBuilder.group({
         adminName: ['', Validators.required],
         adminEmail: ['', Validators.required],
         adminPhone: ['', Validators.required],
         gender: ['', Validators.required]
    });
    this.getAdminListByAdminId(this.adminId);
  }

  public get f() {
    return this.adminUpdateForm.controls;
  }

  public onSubmit(){
       this.submitted = true;
          if (this.adminUpdateForm.invalid) {
            return;
          }
    this.signUpApiService.updateAdminById(
       this.adminId ,
       this.f.adminName.value,
       this.f.adminEmail.value,
       this.f.adminPhone.value,
       this.f.gender.value)
      .subscribe(
        data => {
          /*Toast.fire({type: 'success', title: 'Sign Up in successfully'});*/
          this.router.navigate(['adminGetList']);
        },
        error => {
          if (error.status === 500) {
            this.serverError = 'Already taken phone number';
          }
        });
  }

  public getAdminListByAdminId(adminId:string){
    alert("Successfull"+adminId);
      this.signUpApiService.getAdminUpdateById(adminId)
      .subscribe(res => {
        this.adminList = res;
        console.log(this.adminList);


      });
  }
  back(){

  }

}



