import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LogFormComponent } from '../log-form/log-form.component';
import { LogementService } from '../logement2/logement.service';
import { LogEditComponent } from '../log-edit/log-edit.component';

@Component({
  selector: 'app-logement2',
  templateUrl: './logement2.component.html',
  styleUrls: ['./logement2.component.css']
})
export class Logement2Component implements OnInit {
  selectedValue: string = '';
  housingData: any[] = [];
  
  constructor(
    private dialog: MatDialog, 
    private route: ActivatedRoute, 
    private logementService: LogementService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedValue = params.get('selectedValue')!;
      this.getHousingData(this.selectedValue);
    });
  }

  editHousing(id: number): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: id
    };
    this.dialog.open(LogEditComponent, dialogConfig);
  }
  
  deleteHousing(id: number): void {
    this.logementService.deleteHousing(id).subscribe(
      (response: any) => {
        console.log(response);
        alert('Record deleted successfully');
        location.reload();
      },
      (error: any) => {
        console.log(error);
        if (error.error.text === 'Record deleted successfully') {
          alert('Record deleted successfully');
          location.reload();
        } else {
          alert('Error deleting record');
        }
      }
    );
  }

  getHousingData(region: string): void {
    this.logementService.getHousingDataByRegion(region).subscribe(data => {
      this.housingData = data;
    });
  }

  AddPetSitter(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      selectedValue: this.selectedValue
    };
    this.dialog.open(LogFormComponent, dialogConfig);
  }
}
