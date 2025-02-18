import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logement1',
  templateUrl: './logement1.component.html',
  styleUrls: ['./logement1.component.css']
})
export class Logement1Component  {
  selectedValue: string = '';
  constructor(private router: Router) {}
  redirectToLogement2() {
    this.router.navigate(['/logement2', this.selectedValue]);
  }
}
