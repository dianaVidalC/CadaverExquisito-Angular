import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poema',
  templateUrl: './poema.component.html',
  styleUrls: ['./poema.component.css']
})
export class PoemaComponent implements OnInit {

  conjuntoPoemas = ['Debería llamarlo felicidad pero quizá sea otra cosa lo que viene entrando con ligereza',
                    'Quiero decir contar hasta dos hasta cinco, no ya para que acuda presurosa en mi auxilio',
                    'El pasado no se puede deshacer u olvidar el futuro es todo a lo que podemos aspirar',
                    'Algunas veces encuentras en la vida una amistad especial: ese alguien que al entrar en tu vida la cambia por completo',
                    'De ahora en adelante, pon tus fuerzas en construir una vida nueva',
                    'Las horas se desplazan sin prisa a través del horizonte de mis días',
                    'Tantas sombras opacando mi existencia con su oscuridad',
                    'Que una simple gota de lluvia nos permita valorar el momento en que estamos juntos',
                    'Es como escribir la última historia gritando pasión, en vez de victoria',
                    'Entonces fundidos en un mismo metal desvanezcámonos como agua que se evapora'];
  constructor() { }

  ngOnInit() {
  }

}
