import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent {
  nombre: string = 'Susana';
  genero: string = 'femenino';

  //i18nSelect
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
    'otro': 'invitarle'
  }

  cambiarGenero() {
    switch (this.genero) {
      case 'masculino':
        this.nombre = "Heerlen";
        this.genero = "femenino";
        break;
      case 'femenino':
        this.nombre = "Señore";
        this.genero = "otro";
        break;
      case 'otro':
        this.nombre = "Luis";
        this.genero = "masculino";
        break;
    }
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Luis', 'Angel', 'Heerlen']
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  borrarCliente() {
    this.clientes.pop()
  }

  //KeyValue Pipe
  persona = {
    nombre: "Luis",
    edad: 35,
    direccion: "Victoria, Tamps, Mx",
  };

  //Json pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: "Acuaman",
      vuala: false
    },
    {
      nombre: "Batman",
      vuela: false
    }
  ];

  //Async Pipe
  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa');
    }, 3500);
  });
}
