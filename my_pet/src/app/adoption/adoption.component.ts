import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PetDescAComponent } from '../pet-desc-a/pet-desc-a.component';
import { AdoptionService } from './adoption.service';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css']
})
export class AdoptionComponent implements OnInit {
  adoptionData: any[] = [];
  searchTerm: string = '';
  filteredAdoptionData: any[] = [];

  constructor(private dialog: MatDialog, public AdoptionService: AdoptionService) {}

  ngOnInit(): void {
    this.getAdoptionData();
  }

  getAdoptionData(): void {
    this.AdoptionService.getAdoptionData().subscribe(data => {
      this.adoptionData = data;
      this.filteredAdoptionData = data;
    });
  }

  openAdoptionDetails(row: any): void {
    const dialogRef = this.dialog.open(PetDescAComponent, {
      data: { row: row }
    });
  }

  searchAdoptionData(event: Event): void {
    event.preventDefault();
    this.filteredAdoptionData = this.adoptionData.filter(row => {
      return row.NameA.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
}