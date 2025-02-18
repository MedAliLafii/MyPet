import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetDescAService {

  constructor(private http: HttpClient) { }

  openRemovePet(id: number): Observable<any> {
    return this.http.delete<any[]>(`http://localhost/mypet/remove_pet_a.php?id=` + id);
  }
}
