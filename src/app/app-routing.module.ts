import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SustentacionComponent } from './sustentacion/sustentacion.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  {path: '', redirectTo: '/calculator', pathMatch: 'full'},
  { path: 'sustentacion', component: SustentacionComponent, data:{title: 'Sustentacion'} },
  { path: 'calculator', component: CalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
