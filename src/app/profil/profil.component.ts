import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjoutcoursComponent } from '../ajoutcours/ajoutcours.component';
import { ModifpersoComponent } from '../modifperso/modifperso.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  openDialog(): void {
    const dialogRef = this.dialog.open(AjoutcoursComponent, {
      width: '500px',
      height:'500px',
    
      
    });}
    openDialog2(): void {
      const dialogRef = this.dialog.open(ModifpersoComponent, {
        width: '500px',
        height:'500px',
      
        
      });}

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }

}
