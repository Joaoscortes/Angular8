import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ProductService } from './services/product/product.service';
import { DataService } from './services/data/data.service';

import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    SideBarComponent
  ],
  providers: [
    ProductService,
    DataService
  ]
})
export class SharedModule { }
