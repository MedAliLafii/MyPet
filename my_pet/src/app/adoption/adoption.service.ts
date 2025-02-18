import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdoptionService {

  constructor(private http: HttpClient) { }

  getAdoptionData() {
    return this.http.get<any[]>('http://localhost/mypet/adoption.php');
  }
}
