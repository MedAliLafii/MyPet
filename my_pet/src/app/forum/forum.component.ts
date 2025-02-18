import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuestionComponent } from '../question/question.component';
import { ForumService } from './forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  forumData: any[] = [];
  searchTerm: string = '';
  filteredForumData: any[] = [];
  numOfItemsDisplayed: number = 3;
  noMoreItemsToShow: boolean = true;
  constructor(private dialog: MatDialog, public ForumService: ForumService) {}

  ngOnInit(): void {
    this.getForumData();
  }

  getForumData(): void {
    this.ForumService.getForumData().subscribe(data => {
      this.forumData = data;
      this.filteredForumData = data.slice(0, this.numOfItemsDisplayed);
      this.noMoreItemsToShow = this.numOfItemsDisplayed <= this.forumData.length;
    });
  }

  openForumDetails(row: any): void {
    const dialogRef = this.dialog.open(QuestionComponent, {
      data: { row: row }
    });
  }

  searchForumData(event: Event): void {
    event.preventDefault();
    this.filteredForumData = this.forumData.filter(row => {
      return row.TitleQ.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  seeMore(): void {
    this.numOfItemsDisplayed += 3;
    this.filteredForumData = this.forumData.slice(0, this.numOfItemsDisplayed);
    this.noMoreItemsToShow = this.numOfItemsDisplayed <= this.forumData.length;
  }
}
