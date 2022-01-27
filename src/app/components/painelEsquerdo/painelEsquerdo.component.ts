import { Component, OnInit } from '@angular/core';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-painelEsquerdo',
  templateUrl: './painelEsquerdo.component.html',
  styleUrls: ['./painelEsquerdo.component.scss']
})
export class PainelEsquerdoComponent implements OnInit {

  homeIcone = faHome;
  pesquisarIcone = faSearch;
  artistasIcone = faGuitar;
  playlist = faMusic;

  menuSelecionado: string = "Home"

  constructor() { }

  ngOnInit() {
  }

  botaoClick(menuSelecionado: string){
    this.menuSelecionado = menuSelecionado;
  }

}
