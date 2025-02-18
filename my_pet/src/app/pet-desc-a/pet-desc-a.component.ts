import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PetDescAService } from './pet-desc-a.service';

@Component({
  selector: 'app-pet-desc-a',
  templateUrl: './pet-desc-a.component.html',
  styleUrls: ['./pet-desc-a.component.css']
})
export class PetDescAComponent {
  row: any;

  constructor(public dialogRef: MatDialogRef<PetDescAComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private petDescAService: PetDescAService) {
      this.row = data.row;
    }

    openRemovePet(id: number): void {
      this.petDescAService.openRemovePet(id).subscribe(
        (response: any) => {
          console.log(response);
          alert('Pet removed successfully');
          location.reload();
          this.dialogRef.close();
        },
        (error: any) => {
          console.log(error);
          if (error.error.text === 'Pet removed successfully') {
            alert('Pet removed successfully');
            location.reload();
            this.dialogRef.close();
          } else {
            alert('Error removing pet');
            location.reload();
          }
        }
      );
    }
    

}
