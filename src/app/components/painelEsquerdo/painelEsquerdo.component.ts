import { SpotifyService } from './../../services/spotify.service';
import { IPlaylist } from './../../interfaces/IPlaylist';
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
  playlistIcone = faMusic;

  menuSelecionado: string = "Home"

  playlists: IPlaylist[] = [];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.buscarPlaylistS();
  }

  botaoClick(menuSelecionado: string){
    this.menuSelecionado = menuSelecionado;
  }

  async buscarPlaylistS(){
    this.playlists = await this.spotifyService.buscarPlaylistUsuario();
  }

}
