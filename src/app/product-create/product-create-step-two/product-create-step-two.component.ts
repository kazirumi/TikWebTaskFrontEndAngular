import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-create-step-two',
  templateUrl: './product-create-step-two.component.html',
  styleUrls: ['./product-create-step-two.component.css']
})
export class ProductCreateStepTwoComponent implements OnInit {
  variantList: any[] = [];
  SingleVariantIndex: number;
  constructor(public productService:ProductService) { }

  ngOnInit(): void {
    console.log("from second step",this.productService.ProductFormForSave);
    this.productService.getAllVariant().subscribe(
      (res: any) => {
        res.forEach((element: any) => {
          delete element._id;
          this.variantList.push(element);
          console.log(this.variantList);
        });
        

      },
      err => {
        console.log(err);
      }
    );
  }
  textAreaWordCount:number=0;
  onKeyUpTextArea(event:any){
    let text = event.target.value;
    this.textAreaWordCount=text.length;
  }
  setVariant() {
    this.productService.ProductFormForSave.varient={id:"",varientName:"",varientSubName:[{Name:""}]}
    this.variantList.forEach((element, i) => {
      if (i == this.SingleVariantIndex) {
        this.productService.ProductFormForSave.varient.id = element.id;
        this.productService.ProductFormForSave.varient.varientName = element.varientName;
      }
    });
    console.log(this.productService.ProductFormForSave);  
  }
  onSubmit(form: NgForm) {
    console.log(this.productService.ProductFormForSave);
    



  }
}
