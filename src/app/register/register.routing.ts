import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from './register.component';
import { RegisterResolver } from './register.resolve';
import { NgModule } from '@angular/core';



const routes: Routes = [
  { path: '', component: RegisterComponent, resolve: { data: RegisterResolver } }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    RegisterResolver
  ]
})

export class RegisterRoutingModule { }
