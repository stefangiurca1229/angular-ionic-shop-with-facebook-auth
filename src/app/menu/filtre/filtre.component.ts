import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'shop-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.scss'],
})
export class FiltreComponent implements OnInit {

  filtreForm = new FormGroup({
    county: new FormControl(''),
    city: new FormControl('')
    
  })

  constructor() { }

  ngOnInit() {}

  selectLocation(){

  }

  selectCategory(){
    
  }

}
