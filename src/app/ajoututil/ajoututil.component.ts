import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-ajoututil',
  templateUrl: './ajoututil.component.html',
  styleUrls: ['./ajoututil.component.css']
})
export class AjoututilComponent implements OnInit {
  f = new FormGroup({
    Name: new FormControl(''),
    mail: new FormControl(''),
    password: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
   
  }

}
