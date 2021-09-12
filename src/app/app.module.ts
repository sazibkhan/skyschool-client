import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbAlertModule, NgbModalModule, NgbModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";

import { AdminsignupSaveComponent } from './component/adminsignup-save/adminsignup-save.component';
import { AdminsignupListComponent } from './component/adminsignup-list/adminsignup-list.component';
import { AdminsignupUpdateProfileComponent } from './component/adminsignup-update-profile/adminsignup-update-profile.component'

import { CategorySaveComponent } from './component/category-save/category-save.component';
import { CategoryListComponent } from './component/category-list/category-list.component';
import { CategoryUpdateProfileComponent } from './component/category-update-profile/category-update-profile.component';




@NgModule({
  declarations: [
    AppComponent,

     AdminsignupSaveComponent,
     AdminsignupListComponent,
     AdminsignupUpdateProfileComponent,

     CategorySaveComponent,
     CategoryListComponent,
     CategoryUpdateProfileComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbModalModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
