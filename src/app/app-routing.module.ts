import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { LoginComponent } from './login/login.component';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { AuthGuardService } from './auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { UpdateProductFormComponent } from './admin/update-product-form/update-product-form.component';

const routes: Routes = [
// routers for unkown users
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'products',component:ProductsComponent},
{path:'login',component:LoginComponent},
{path:'shopping/cart',component:ShoppingCartComponent},

  // routers for loged in users
{path:'check-out',component:CheckOutComponent,canActivate:[AuthGuardService]},
{path:'my/orders',component:MyOrderComponent,canActivate:[AuthGuardService]},
{path:'order/success',component:OrderSuccessComponent,canActivate:[AuthGuardService]},

//  rourters for admin
{
  path:'admin/orders',
  component:AdminOrderComponent,
  canActivate:[AuthGuardService,AdminAuthGuardService]
},
{
  path:'admin/products/new',
  component:ProductFormComponent,
  canActivate:[AuthGuardService,AdminAuthGuardService]
},
{
  path:'admin/products/:id',
  component:UpdateProductFormComponent,
  canActivate:[AuthGuardService,AdminAuthGuardService]
},
{
  path:'admin/products',
  component:AdminProductComponent,
  canActivate:[AuthGuardService,AdminAuthGuardService]
},
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
 
})
export class AppRoutingModule { }
export const routingComponents=[
                                HomeComponent,
                                CheckOutComponent,
                                MyOrderComponent,
                                OrderSuccessComponent,
                                ProductsComponent,
                                ShoppingCartComponent,
                                AdminOrderComponent,
                                AdminProductComponent,
                                ProductFormComponent,
                                LoginComponent,
                                UpdateProductFormComponent
                              ]
