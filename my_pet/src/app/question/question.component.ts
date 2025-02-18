import { Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit{
  row: any;
  comments: any[] = [];

  constructor(public dialogRef: MatDialogRef<QuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private QuestionService: QuestionService) {
      this.row = data.row;
    }

    ngOnInit(): void {
        this.getComments(this.row.idQuestion);
    }

    getComments(id: number): void {
      this.QuestionService.getComments(id).subscribe(data => {
        this.comments = data
      });
    }

    deleteQuestion(id: number): void {
      this.QuestionService.deleteQuestion(id).subscribe(
        (response: any) => {
          console.log(response);
          alert('Topic deleted successfully');
          location.reload();
          this.dialogRef.close();
        },
        (error: any) => {
          console.log(error);
          if (error.error.text === 'Topic deleted successfully') {
            alert('Topic deleted successfully');
            location.reload();
            this.dialogRef.close();
          } else {
            alert('Error deleting topic');
            location.reload();
          }
        }
      );
    }

    deleteComment(id: number): void {
      this.QuestionService.deleteComment(id).subscribe(
        (response: any) => {
          console.log(response);
          alert('Comment deleted successfully');
          location.reload();
          this.dialogRef.close();
        },
        (error: any) => {
          console.log(error);
          if (error.error.text === 'Comment deleted successfully') {
            alert('Comment deleted successfully');
            location.reload();
            this.dialogRef.close();
          } else {
            alert('Error deleting comment');
            location.reload();
          }
        }
      );
    }
    

}
