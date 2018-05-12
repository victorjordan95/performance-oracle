import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  private baseURL = `https://api.myjson.com/bins/q3vne`;

  constructor(private _http: HttpClient) {
  }
  getData1() {
    //read commited
    return this._http.get(`https://api.myjson.com/bins/cafjq`);
  }
  getData2() {
    return this._http.get(`https://api.myjson.com/bins/11amye`);
  }

}
