import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from './shared/shared.module';

import { LayoutComponent } from './layout.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { ShelvesComponent } from './shelves/shelves.component';
import { PdfComponent } from './pdf/pdf.component';

@NgModule({
  declarations: [LayoutComponent, MainComponent, ProductsComponent, ShelvesComponent, PdfComponent],
  imports: [
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
