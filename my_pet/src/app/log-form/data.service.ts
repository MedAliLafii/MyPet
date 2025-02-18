import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Function to send form data to the server
  sendData(data: any): Observable<any> {
    return this.http.post<any>('http://localhost/mypet/logform.php', data);
  }

}