import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({providedIn: 'root'})
export class AdminSignUpApiService {

  constructor(private http: HttpClient) {}

  private postAdminSignUpData: string = environment.apiHost + '/admin/insert';
  private adminGetInformation: string = environment.apiHost + '/admin/get/allInformation';
  private adminGetInformationByAdminId: string = environment.apiHost + '/admin/get/allInformation/by/';
  private adminUpdateInformationByAdminId: string = environment.apiHost + '/admin/get/Information/updateBy/';
  private adminDeleteInformationByAdminId: string = environment.apiHost + '/admin/delete/Information/by/';

  public adminSignUpService(adminName: string, adminEmail: string,password: string, adminPhone: string, gender: string): Observable<any> {
        return this.http.post(this.postAdminSignUpData, {
            adminName: adminName,
            adminEmail: adminEmail,
            password: password,
            adminPhone: adminPhone,
            gender:gender

      },
    );
  }


  public getAdminList(): Observable<any> {
        return this.http.get(this.adminGetInformation, httpOptions).pipe(map(res => res));

  }

  public getAdminUpdateById(adminId: string): Observable<any> {
        return this.http.get(this.adminGetInformationByAdminId + adminId, httpOptions).pipe(map(res => res));
  }

  public updateAdminById(adminId: string, adminName: string, adminEmail: string, adminPhone: string, gender: string): Observable<any> {
    return this.http.put(this.adminUpdateInformationByAdminId + adminId, {
      adminName: adminName,
      adminEmail: adminEmail,
      adminPhone: adminPhone,
      gender: gender
      },
    );
  }

  public adminDeleteById(adminId: string): Observable<any> {
       return this.http.delete(this.adminDeleteInformationByAdminId + adminId, httpOptions)
                  .pipe(map(res => res));

  }

}
