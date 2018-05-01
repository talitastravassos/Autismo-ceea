import { NgModule } from '@angular/core';
import { CartaoComponent } from './cartao/cartao.component';
import { ResultadoComponent } from './resultado/resultado.component';
@NgModule({
	declarations: [
    CartaoComponent,
    ResultadoComponent],
	imports: [],
	exports: [
    CartaoComponent,
    ResultadoComponent]
})
export class ComponentsModule {}
