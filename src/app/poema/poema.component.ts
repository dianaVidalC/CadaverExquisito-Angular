import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-poema',
  templateUrl: './poema.component.html',
  styleUrls: ['./poema.component.css']
})
export class PoemaComponent implements OnInit {
  private poemas: any;
@Input()
  val= this.poemas;
  constructor() { }

  ngOnInit() {
    console.log(this.poemas)
  }
}
