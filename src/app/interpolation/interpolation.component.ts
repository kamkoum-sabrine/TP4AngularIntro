import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  titre: string = "Test TP4";
  nom: string = "Hello DSI3";
  age: number = 20;
  constructor() { }
  infos() {
    return this.nom + " a pour âge " + this.age + "ans.";
  }

  ngOnInit(): void {
  }

}
