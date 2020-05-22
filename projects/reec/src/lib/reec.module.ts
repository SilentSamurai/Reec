import { NgModule } from '@angular/core';
import { ReecComponent } from './reec.component';
import { RcTileComponent } from './rc-tile/rc-tile.component';



@NgModule({
  declarations: [ReecComponent, RcTileComponent],
  imports: [
  ],
  exports: [ReecComponent]
})
export class ReecModule { }
