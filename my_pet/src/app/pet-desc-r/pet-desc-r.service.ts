import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetDescRService {

  constructor(private http: HttpClient) { }

  openRemovePet(id: number): Observable<any> {
    return this.http.delete<any[]>(`http://localhost/mypet/remove_pet_r.php?id=` + id);
  }
}
