import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.scss'],
})
export class NewAdComponent implements OnInit {

  v="mihai"

  newAdForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    county: new FormControl(''),
    city: new FormControl('')
  })

  cities = null;

  constructor() { }

  ngOnInit() {}

  onSubmit(){
    console.log(this.newAdForm.value)
  }

}
