import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDatatableComponent } from './product-datatable/product-datatable.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProductService } from './shared/product.service';
import { MatChipsModule } from '@angular/material/chips';

//import { ProductCreateStepOneComponent } from './product-create/product-create-step-one/product-create-step-one.component';
//import { ProductCreateStepTwoComponent } from './product-create/product-create-step-two/product-create-step-two.component';
// import { MainNavComponent } from './main-nav/main-nav.component';
// import { LayoutModule } from '@angular/cdk/layout';
// import { MatToolbarModule } from '@angular/material/toolbar';
 //import { MatButtonModule } from '@angular/material/button';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';





@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ProductDatatableComponent,
    //ProductCreateStepOneComponent,
    //ProductCreateStepTwoComponent,
    // MainNavComponent,
    //ProductComponent,
    
    //LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    //BrowserAnimationsModule,
    //MatButtonModule,
    // LayoutModule,
    // MatToolbarModule,
    
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
