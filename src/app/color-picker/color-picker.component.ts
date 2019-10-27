import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  public color: string;

  public exchangeColor(value) {
    this.color = value;
  }

  constructor() {
    this.exchangeColor('\#000');
  }

  ngOnInit() {
  }

}
