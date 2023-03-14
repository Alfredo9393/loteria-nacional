import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MayorComponent } from './mayor/mayor.component';
import { SuperiorComponent } from './superior/superior.component';
import { ZodiacoComponent } from './zodiaco/zodiaco.component';

import { ModulesRoutingModule } from './modules-routing.module';
import { ResultAllComponent } from './result-all/result-all.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {ComponentModule} from '../component/component.module';
import { CalendarioComponent } from './calendario/calendario.component';
// import {MaterialExampleModule} from '../../material.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [
    // EmployeesListComponent,
    // EmployeesNewComponent,
    // GroupsComponent,
     ResultAllComponent,
     MayorComponent,
     SuperiorComponent,
    CalendarioComponent
    // GroupsEmployeesComponent
  ],
  imports: [
    ComponentModule,
    ModulesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule,
    MatCheckboxModule,
    MatIconModule,
    // MaterialExampleModule,
    MatTabsModule,
    MatSortModule
  ]
}) 
export class ModulesModule { }
