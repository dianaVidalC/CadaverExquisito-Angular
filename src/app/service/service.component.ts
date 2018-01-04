import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  form: FormGroup;
  poemas:any = {};
  i:number = 1;
  constructor(private fb: FormBuilder, private angFbase: AngularFireDatabase) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      frases: ['', Validators.required]
    })
  }

  guardarPoema() {
    this.poemas.id = Date.now();
    this.angFbase.database.ref('frases/' + this.poemas.id+ '/frase'+this.i).set(this.poemas.frase);
    this.i = this.i + 1;
  }
  mostrarPoemas(){
    return this.angFbase.list('frases/');
  }
  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.form.reset();
    }
  }
}
