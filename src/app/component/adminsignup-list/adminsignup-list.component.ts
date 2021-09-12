import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AdminSignUpApiService} from "../../service/adminSignUp.api.service";

@Component({
  selector: 'app-adminsignup-list',
  templateUrl: './adminsignup-list.component.html',
  styleUrls: ['./adminsignup-list.component.css']
})
export class AdminsignupListComponent implements OnInit {

  searchText: any;
  adminListForm!: FormGroup;
  submitted = false;
  show!: boolean;
  serverError = '';
  getListAdmin: Array<any> = [];


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private  signUpApiService : AdminSignUpApiService) { }

  get f(){
    return this.adminListForm
  }


  public ngOnInit(): void {
      this.getAdminProfile();
  }

  public onSubmit(){
    this.submitted=true;
    if(this.adminListForm.invalid){
    }
    console.log("Show Data SuccessFull ");
  }

  public getAdminProfile() {
    this.signUpApiService.getAdminList().subscribe(res => {
      res.forEach((adminInformation: any) => {
        this.getListAdmin.push(adminInformation);
      });
    });
  }

  public onClickAdminEdit(id:any){
    alert(id);
    this.router.navigate(['adminUpdateProfile'+'/'+id]);
  }

  public onClickAdminDelete(id:any){
    this.signUpApiService.adminDeleteById(id).subscribe(res => {
      this.router.navigate(['']);
    });
  }



}
