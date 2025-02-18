import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PetDescRComponent } from '../pet-desc-r/pet-desc-r.component';
import { SignalService } from './signal.service';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css']
})
export class SignalComponent implements OnInit {
  signalData: any[] = [];
  searchTerm: string = '';
  filteredSignalData: any[] = [];

  constructor(private dialog: MatDialog, public SignalService: SignalService) {}

  ngOnInit(): void {
    this.getSignalData();
  }

  getSignalData(): void {
    this.SignalService.getSignalData().subscribe(data => {
      this.signalData = data;
      this.filteredSignalData = data;
    });
  }

  openSignalDetails(row: any): void {
    const dialogRef = this.dialog.open(PetDescRComponent, {
      data: { row: row }
    });
  }


  searchSignalData(event: Event): void {
    event.preventDefault();
    this.filteredSignalData = this.signalData.filter(row => {
      return row.NameR.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
}