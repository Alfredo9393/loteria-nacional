import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleH2Component } from './title-h2/title-h2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MaterialExampleModule} from '../../material.module';


@NgModule({
  declarations: [
    TitleH2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule
  ], 
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TitleH2Component,
    RouterModule
  ]
})
export class ComponentModule { }
