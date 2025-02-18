import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogementService {

  constructor(private http: HttpClient) { }

  getHousingDataByRegion(region: string) {
    return this.http.get<any[]>('http://localhost/mypet/logement.php?region=' + region);
  }

  deleteHousing(id: number): Observable<any> {
    return this.http.delete<any[]>(`http://localhost/mypet/delete_housing.php?id=` + id);
  }
}
