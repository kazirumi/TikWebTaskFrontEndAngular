import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService:ProductService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  GotoProductCreateStepTwo()
  {
      this.router.navigate(['ProductCreateStepTwo'],{relativeTo:this.route});
  }

}
