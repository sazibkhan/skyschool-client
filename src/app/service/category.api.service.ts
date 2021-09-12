import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({providedIn: 'root'})
export class CategoryApiService {

  private categoryPostData: string = environment.apiHost + '/category/insert';
  private categoryGetInformation: string = environment.apiHost + '/category/get/allInformation';
  private categoryGetInformationByCategoryId: string = environment.apiHost + '/category/get/allInformation/by/';
  private categoryUpdateInformationByCategoryId: string = environment.apiHost + '/category/get/Information/updateBy/';
  private categoryDeleteInformationByCategoryId: string = environment.apiHost + '/category/delete/Information/by/';

  constructor(private http: HttpClient) {}

  public postCategoryService(categoryName: string): Observable<any> {
       return this.http.post(this.categoryPostData, {
          categoryName: categoryName
      },
    );
  }

  public  getCategoryList():Observable<any>{
    return  this.http.get(this.categoryGetInformation,httpOptions).pipe(map(res => res));
  }

  public getCategoryUpdateById(categoryId: string): Observable<any> {
    return this.http.get(this.categoryGetInformationByCategoryId + categoryId, httpOptions).pipe(map(res => res));
  }

  public updateCategoryById(categoryId: string,categoryName:string): Observable<any>{
        return this.http.put(this.categoryUpdateInformationByCategoryId + categoryId, {
        categoryName:categoryName
      },
    );
  }

  public categoryDeleteById(categoryId: string): Observable<any> {
        return this.http.delete(this.categoryDeleteInformationByCategoryId + categoryId, httpOptions).pipe(map(res => res));
  }


}
