import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProductService } from './services/product/product.service';
import { DataService } from './services/data/data.service';

import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BarChartComponent } from './components/barChart/barChart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    BarChartComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    BarChartComponent,
    PieChartComponent
  ],
  providers: [
    ProductService,
    DataService
  ]
})
export class SharedModule { }
