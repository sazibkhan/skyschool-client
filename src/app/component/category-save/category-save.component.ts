import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CategoryApiService} from "../../service/category.api.service";

@Component({
  selector: 'app-category-save',
  templateUrl: './category-save.component.html',
  styleUrls: ['./category-save.component.css']
})
export class CategorySaveComponent implements OnInit {
  categoryForm!: FormGroup;
  submitted = false;
  show!: boolean;
  serverError = '';


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private categoryApiService : CategoryApiService) { }

  get f() {
    return this.categoryForm.controls;
  }


  ngOnInit(): void {

    this.categoryForm=this.formBuilder.group({
        categoryName:['',Validators.required],
        orgName:['',Validators.required]
      });
  }



  public onSubmit() {
    this.submitted = true;
    if (this.categoryForm.invalid) {
    }
    this.categoryApiService.postCategoryService(
      this.f.categoryName.value
    )
      .subscribe(
        data => {
          this.router.navigate(['/categorGetList']);
        },
        error => {
          if (error.status === 500) {
            this.serverError = 'Already taken category Name';
          }
        });
  }

}
