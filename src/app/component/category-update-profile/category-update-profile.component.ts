import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryApiService} from "../../service/category.api.service";

@Component({
  selector: 'app-category-update-profile',
  templateUrl: './category-update-profile.component.html',
  styleUrls: ['./category-update-profile.component.css']
})
export class CategoryUpdateProfileComponent implements OnInit {

  categoryUpdateForm!: FormGroup;
  submitted = false;
  show!: boolean;
  serverError = '';
  categoryId! : string ;
  categoryList: any;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private categoryApiService : CategoryApiService) {

              this.route.params.subscribe(params => {

              this.categoryId = this.route.snapshot.params['id'];
         });
    }



  public ngOnInit(): void {
    this.categoryUpdateForm = this.formBuilder.group({
      categoryName: ['', Validators.required]
    });
    this.getCategoryListByCategoryId(this.categoryId);
  }


  public get f() {
    return this.categoryUpdateForm.controls;
  }


  public onSubmit(){
    this.submitted = true;
        if (this.categoryUpdateForm.invalid) {
          return;
        }
    this.categoryApiService.updateCategoryById(
      this.categoryId,
      this.f.categoryName.value)
      .subscribe(
        data => {this.router.navigate(['categorGetList']);},
        error => {
          if (error.status === 500) {
            this.serverError = 'Already taken phone number';
          }
        });
  }


  public getCategoryListByCategoryId(categoryId:string){
      this.categoryApiService.getCategoryUpdateById(categoryId).subscribe(res => {
      this.categoryList = res;
      console.log(this.categoryList);
    });
  }
  back(){

  }


}
