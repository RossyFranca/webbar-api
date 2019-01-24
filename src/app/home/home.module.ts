import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { HomeResolver } from './home.resolver';
import { HomeRoutingModule } from './home.routing';
import { ComponentesModule } from '../componentes/componentes.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentesModule
  ],
  providers: [HomeResolver],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HomeModule { }
