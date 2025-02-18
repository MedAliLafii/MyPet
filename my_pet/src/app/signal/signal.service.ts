import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  constructor(private http: HttpClient) { }

  getSignalData() {
    return this.http.get<any[]>('http://localhost/mypet/signal.php');
  }
}
