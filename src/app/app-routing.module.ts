import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AdminsignupSaveComponent} from "./component/adminsignup-save/adminsignup-save.component";
import {AdminsignupListComponent} from "./component/adminsignup-list/adminsignup-list.component";
import {AdminsignupUpdateProfileComponent} from "./component/adminsignup-update-profile/adminsignup-update-profile.component";

import {CategorySaveComponent} from "./component/category-save/category-save.component";
import {CategoryListComponent} from "./component/category-list/category-list.component";
import {CategoryUpdateProfileComponent} from "./component/category-update-profile/category-update-profile.component";


const routes: Routes = [


  {
    path: '',
    component: AdminsignupSaveComponent,
    children: [{path: '', component: AdminsignupSaveComponent, pathMatch: 'full'}]
  },

  {
    path: 'adminGetList',
    component: AdminsignupListComponent,
    children: [
      {path: 'adminGetList', component: AdminsignupListComponent, canActivate: [true]},
    ],
  },

  {
    path: 'adminUpdateProfile/:id',
    component: AdminsignupUpdateProfileComponent,
    children: [
      { path: 'adminUpdateProfile/:id', component: AdminsignupUpdateProfileComponent, pathMatch: 'full'}

    ]
  },

  {
    path: 'categorPostData',
    component: CategorySaveComponent,
    children: [{path: 'categorPostData', component: CategorySaveComponent, pathMatch: 'full'}]
  },

  {
    path: 'categorGetList',
    component: CategoryListComponent,
    children: [
      {path: 'categorGetList', component: CategoryListComponent, canActivate: [true]},
    ],
  },

  {
    path: 'categorUpdateProfile/:id',
    component: CategoryUpdateProfileComponent,
    children: [{  path: 'categorUpdateProfile/:id', component: CategoryUpdateProfileComponent, pathMatch: 'full'}]
  },




];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
