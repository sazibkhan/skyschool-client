import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {CategoryApiService} from "../../service/category.api.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  searchText: any;
  categoryListForm!: FormGroup;
  submitted = false;
  show!: boolean;
  serverError = '';
  getListCategory: Array<any> = [];


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private categoryApiService : CategoryApiService ) { }

  get f(){
    return this.categoryListForm
  }

  public ngOnInit(): void {
    this.getCategoryProfile();
  }


  public onSubmit(){
    this.submitted=true;
    if(this.categoryListForm.invalid){
    }
    console.log("Show Data SuccessFull ");
  }

  public getCategoryProfile() {
    this.categoryApiService.getCategoryList().subscribe(res => {
      res.forEach((categoryInformation: any) => {
        this.getListCategory.push(categoryInformation);
      });
    });
  }

  public onClickCategoryEdit(id:any){
    this.router.navigate(['categorUpdateProfile'+'/'+id]);

  }
  public onClickCategoryDelete(id:any){
      this.categoryApiService.categoryDeleteById(id).subscribe(res=>{
      this.router.navigate(['/']);
    })
  }



}

