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
import { AuthInterceptor } from './auth/auth.interceptor';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SideNavComponent } from './side-nav/side-nav.component';






@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ProductDatatableComponent,
    SideNavComponent,
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
    MatButtonModule,
    // LayoutModule,
     MatToolbarModule,
    
     MatSidenavModule,
     MatIconModule,
     MatDividerModule
    // MatListModule
    
  ],
  providers: [ProductService,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
