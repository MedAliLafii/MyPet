import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getComments(id: number): Observable<any[]> {
    return this.http.get<any[]>('http://localhost/mypet/comments.php?id=' + id);
  }

  deleteQuestion(id: number): Observable<any> {
    return this.http.delete<any[]>(`http://localhost/mypet/comments.php?id=` + id);
  }

  deleteComment(id: number): Observable<any> {
    return this.http.delete<any[]>('http://localhost/mypet/delete_comment.php?id=' + id);
  }
}
