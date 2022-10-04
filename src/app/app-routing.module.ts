import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/adap/sorteo', 
    pathMatch:'full' 
  },
  {
    path:"adap",
    component:SkeletonComponent,
    children:[
      {
      path:'sorteo',
      loadChildren: () => import('./modules/modules.module').then( (m) => m.ModulesModule ) 
      },
      {
        path:'**',
        redirectTo:'/adap/sorteo',
        pathMatch:'full'
      }
  
    ],

  },
  {
    path:'**',
    redirectTo:'/adap/sorteo',
    pathMatch:'full'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})], 
  exports: [RouterModule]
})
export class AppRoutingModule { }


