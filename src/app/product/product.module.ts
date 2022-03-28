import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ProductDetailComponentComponent } from './product-detail-component/product-detail-component.component';
import { ProductComponent } from './product.component';

const routes: Routes = [

  { 
    path: 'product' , component: ProductComponent,
    children: [
      { path: '' , component: MenuComponent},
      { path: 'detail' , component: ProductDetailComponentComponent}
    ],
  }
];

@NgModule({
  declarations: [
    ProductDetailComponentComponent,
    MenuComponent,
    ProductComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }
