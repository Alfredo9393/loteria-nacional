import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MayorComponent } from './mayor/mayor.component';
import { SuperiorComponent } from './superior/superior.component';
import { ZodiacoComponent } from './zodiaco/zodiaco.component';
import { ResultAllComponent } from './result-all/result-all.component';
import { CalendarioComponent } from './calendario/calendario.component';

const routes: Routes = [
  {
    path:"", 
    component:ResultAllComponent
  },
  {
    path:"mayor",  
    component:MayorComponent
  },
  {
    path:"superior",
    component:SuperiorComponent
  },{
    path:"zodiaco",
    component:ZodiacoComponent
  },{
    path:"calendario",
    component:CalendarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
