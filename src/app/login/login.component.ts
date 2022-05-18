import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { AjoututilComponent } from '../ajoututil/ajoututil.component';
import { NavService } from '../service/nav.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  mdpFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher()
  constructor(public nav:NavService, public dialog: MatDialog) { }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(AjoututilComponent, {
      width: '500px',
      height:'500px',
    
      
    });}

  ngOnInit(): void {
    this.nav.hide();
  }

}
