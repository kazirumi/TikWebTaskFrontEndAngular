import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from "../shared/product.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Products:any=[];
  
  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    
    this.productService.getAllProduct().subscribe(
      res=>{
        console.log(res);
        this.Products=res;
      },
      err=>console.log(err)
    );
  }

  goToProductCreate(){
    
      this.router.navigate(['productcreate']);
  }
}
