import { BotaoMenuComponent } from './../../components/botao-menu/botao-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { playerRotas } from './player.routes';

import { PlayerComponent } from './player.component';
import { PainelEsquerdoComponent } from './../../components/painelEsquerdo/painelEsquerdo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    PlayerComponent,
    PainelEsquerdoComponent,
    BotaoMenuComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(playerRotas)
  ]
})
export class PlayerModule { }
