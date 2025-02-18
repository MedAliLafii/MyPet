import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PetDescRService } from './pet-desc-r.service';

@Component({
  selector: 'app-pet-desc-r',
  templateUrl: './pet-desc-r.component.html',
  styleUrls: ['./pet-desc-r.component.css']
})
export class PetDescRComponent {
  row: any;

  constructor(public dialogRef: MatDialogRef<PetDescRComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private petDescRService: PetDescRService) {
      this.row = data.row;
    }

    openRemovePet(id: number): void {
      this.petDescRService.openRemovePet(id).subscribe(
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
