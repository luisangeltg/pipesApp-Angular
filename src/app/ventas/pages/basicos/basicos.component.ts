import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {

  nombreLower: string = "luis angel t";
  nombreUpper: string = "LUIS ANGEL T";
  nombreCompleto: string = "lUIs AnGEL ToRRes";

  fecha: Date = new Date();
}
