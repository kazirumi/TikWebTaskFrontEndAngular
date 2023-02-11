import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { ControlValueAccessor, NgForm } from '@angular/forms';
import { MatChip, MatChipList } from '@angular/material/chips';
import { map } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';


@UntilDestroy()
@Component({
  selector: 'app-product-create-step-two',
  templateUrl: './product-create-step-two.component.html',
  styleUrls: ['./product-create-step-two.component.css']
})
export class ProductCreateStepTwoComponent implements OnInit {
  variantList: any[] = [];
  varientSubNameList: any[] = [];
  // SingleVariantIndex: number;
  constructor(public productService: ProductService) { }



  ngOnInit(): void {
    this.productService.StepCount=2;
    if (!this.productService.ProductFormForSave.varient)
      this.productService.ProductFormForSave.varient = { id: "", varientName: "", varientSubName: [{ Name: "" }] }

    console.log("from second step", this.productService.ProductFormForSave);
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
  textAreaWordCount: number = 0;
  onKeyUpTextArea(event: any) {
    let text = event.target.value;
    this.textAreaWordCount = text.length;
  }
  setVariant() {
    this.varientSubNameList = [];
    this.productService.ProductFormForSave.varient.varientSubName=[{Name:""}]
    this.variantList.forEach((element, i) => {
      if (i == this.productService.SingleVariantIndex) {
        this.productService.ProductFormForSave.varient.id = element.id;
        this.productService.ProductFormForSave.varient.varientName = element.varientName;
      }
    });
    this.varientSubNameList = this.variantList[this.productService.SingleVariantIndex].varientSubName;
    let DeletedIndex = this.productService.ProductFormForSave.varient.varientSubName.findIndex(x => x.Name == "");
    
    this.productService.ProductFormForSave.varient.varientSubName.splice(DeletedIndex, 1);
    console.log(this.productService.ProductFormForSave);
  }
  toggleSelection(chip: MatChip) {
    chip.toggleSelected();
    console.log(chip.value);
    console.log(chip.selected);
    if (chip.selected) {
      let value = { Name: chip.value }
      this.productService.ProductFormForSave.varient.varientSubName.push(value);
    } else {
      let DeletedIndex = this.productService.ProductFormForSave.varient.varientSubName.findIndex(x => x.Name == chip.value);
      this.productService.ProductFormForSave.varient.varientSubName.splice(DeletedIndex, 1);
    }
    console.log(this.productService.ProductFormForSave);

  }
  onSubmit(form: NgForm) {
    console.log(this.productService.ProductFormForSave);
    //console.log(this.value);



  }


}
