import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { AuthGuard } from './auth/auth.guard';
import { ProductCreateStepOneComponent } from './product-create/product-create-step-one/product-create-step-one.component';
import { ProductCreateStepTwoComponent } from './product-create/product-create-step-two/product-create-step-two.component';
const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full' },
  {path:'login',component:LoginComponent},
  {path:'productlist',component:ProductComponent,canActivate:[AuthGuard]},
  {path:'productcreate',component:ProductCreateComponent,canActivate:[AuthGuard],
  children: [
    {
      path: '', // child route path
      component: ProductCreateStepOneComponent, // child route component that the router renders
    },
    {
      path: 'ProductCreateStepTwo',
      component: ProductCreateStepTwoComponent, // another child route component that the router renders
    },
  ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,ProductComponent,ProductCreateComponent,ProductCreateStepOneComponent,ProductCreateStepTwoComponent]
