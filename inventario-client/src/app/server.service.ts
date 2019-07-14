import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) { }

  get(url: string) {
    console.log(environment.apiUrl + url);
    return this.httpClient.get(environment.apiUrl + url);
  }

  post(url: string, data: any) {
    return this.httpClient.post(environment.apiUrl + url, data);
  }


  put(url: string, data: any) {
    return this.httpClient.put(environment.apiUrl + url, data);
  }

  delete(url: string) {
    return this.httpClient.delete(environment.apiUrl + url);
  }
}