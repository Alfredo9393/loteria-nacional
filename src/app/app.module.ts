import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FooterComponent } from './layout/footer/footer.component';

import { MayorComponent } from './modules/mayor/mayor.component';
import { SuperiorComponent } from './modules/superior/superior.component';
import { ZodiacoComponent } from './modules/zodiaco/zodiaco.component';
import { TitleH2Component } from './component/title-h2/title-h2.component';
import { TitleH3Component } from './component/title-h3/title-h3.component';

import { AppRoutingModule } from './app-routing.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentModule } from './component/component.module';
import {MatNativeDateModule} from '@angular/material/core';
import {MaterialExampleModule} from '../material.module';
import { MatSliderModule } from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SkeletonComponent,
    FooterComponent,
    // MayorComponent,
    // SuperiorComponent,
    // ZodiacoComponent,
    // TitleH2Component,
    // TitleH3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ComponentModule,
    MaterialExampleModule,
    MatNativeDateModule,
    MatSliderModule,
    MatTabsModule
  ],
  providers: [{
    provide:LocationStrategy, 
    useClass:PathLocationStrategy 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

