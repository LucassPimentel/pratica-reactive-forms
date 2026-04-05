import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';

import localPt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { A11yModule } from "@angular/cdk/a11y";
registerLocaleData(localPt, 'pt-BR');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ComponentsModule,
    HttpClientModule,
    A11yModule
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
