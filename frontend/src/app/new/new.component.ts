import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [MatTableModule,CommonModule,RouterModule,MatIconModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})
export class NewComponent {

  countData:any=[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar : MatSnackBar,
    private userService:UserService
  ) {
  }

  ngOnInit(){
    this.userService.getData().subscribe(response => {
      this.countData = response;
    });
  }

  getRowClass(count: number): string {
    if (count > 0 && count < 3) {
      return 'red-background';
    } else if (count >= 3 && count < 10) {
      return 'yellow-background';
    } else if (count >= 10) {
      return 'green-background';
    } else {
      return '';
    }
  }

  displayedColumns: string[] = ['name', 'count'];

}
