import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';



@Injectable()
export class AjaxService {


  constructor(private http: HttpClient) { }

  public async get<T>(url: string, params?: {}) {

    const headers = {
      "Content-type": "application/json; charset=UTF-8"
    }

    return this.http.get<T>(url, { headers, params }).toPromise();
  }


  public async post<T>(url: string, body: any = {}) {

    const options = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    return this.http.post<T>(url, body, options).toPromise();
  }


}
