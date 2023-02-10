import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-create-step-one',
  templateUrl: './product-create-step-one.component.html',
  styleUrls: ['./product-create-step-one.component.css']
})
export class ProductCreateStepOneComponent implements OnInit {
  categoryList: any[] = [];
  SingleCategory: number;
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.StepCount=1;
    if(!this.productService.ProductFormForSave.category)
    this.productService.ProductFormForSave.category = { id: "", categoryName: "" };
    this.productService.getAllCategory().subscribe(
      (res: any) => {
        res.forEach((element: any) => {
          delete element._id;
          this.categoryList.push(element);
        });
        console.log(res);

      },
      err => {
        console.log(err);
      }
    );
  }

  urls = [];
  handleFileInput(eventTargetfiles) {
    this.productService.fileToUpload = eventTargetfiles;
      
      var reader= new FileReader();
      reader.onload=(event:any)=>{
        this.urls.push(event.target.result);

      }
      reader.readAsDataURL(eventTargetfiles[0]);
    console.log(this.productService.fileToUpload);
    console.log(this.urls);
  }


  onSubmit(form: NgForm) {
    console.log(this.productService.ProductFormForSave);
    console.log(this.SingleCategory)



  }

  setCategory() {
    this.categoryList.forEach((element, i) => {
      if (i == this.SingleCategory) {
        this.productService.ProductFormForSave.category.id = element.id;
        this.productService.ProductFormForSave.category.categoryName = element.categoryName;
      }
    });
  }
}
