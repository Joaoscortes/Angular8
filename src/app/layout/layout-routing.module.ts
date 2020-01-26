import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { ShelvesComponent } from './shelves/shelves.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: MainComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'shelves',
        component: ShelvesComponent
      },
      {
        path: '', redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
