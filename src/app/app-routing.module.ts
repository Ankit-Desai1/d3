import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './component/chart/chart.component';
import { ContentComponent } from './component/content/content.component';

const routes: Routes = [
  {path:"chart", component:ChartComponent },
  { path:"content", component:ContentComponent },
  { path:"" , redirectTo:"/chart" , pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
