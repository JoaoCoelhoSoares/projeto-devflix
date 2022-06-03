import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {

  @Output() buscaDigitada = new EventEmitter<string>();

  campoDigitado(value: string) {
    this.buscaDigitada.emit(value);
    console.log(value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
