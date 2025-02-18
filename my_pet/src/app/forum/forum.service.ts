import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http: HttpClient) { }

  getForumData() {
    return this.http.get<any[]>('http://localhost/mypet/questions.php');
  }

  getMoreForumData(offset: number, limit: number) {
    return this.http.get<any[]>('http://localhost/mypet/questions.php?offset=' + offset + '&limit=' + limit);
  }
}
