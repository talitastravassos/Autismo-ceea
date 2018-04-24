import { NgModule } from '@angular/core';
import { CartaoComponent } from './cartao/cartao.component';
import { BotaosComponent } from './botaos/botaos';
@NgModule({
	declarations: [CartaoComponent,
    BotaosComponent],
	imports: [],
	exports: [CartaoComponent,
    BotaosComponent]
})
export class ComponentsModule {}
