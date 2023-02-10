import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';
import { map } from 'rxjs/operators';
import { FileService } from '../shared/FileService';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService:ProductService,private router:Router,private route:ActivatedRoute,private fileService:FileService) { }

  ngOnInit(): void {
  }

  GotoProductCreateStepTwo()
  {   
      if(this.productService.StepCount==1)
      this.router.navigate(['ProductCreateStepTwo'],{relativeTo:this.route});
      
      if(this.productService.StepCount==2){
        this.SaveProduct();
      }
  }
  FilePathList=[];

  async SaveProduct(){
    this.productService.ProductFormForSave.status="active";
    await this.fileSave();
    
  }

  async fileSave(){
   this.fileService.SaveFile(this.productService.fileToUpload).pipe(map((element:any)=>{
    const data = element.map(obj => ({
      path: obj.path.toString().split("\\").join("/")
    }));
    return data;
   })).subscribe(
    filesSavedPathArray=>{
      //file uploaded success full
      console.log(filesSavedPathArray);
      this.FilePathList=filesSavedPathArray;
      this.productService.ProductFormForSave.imagePath=[{path:""}]
      this.productService.ProductFormForSave.imagePath.splice(0,1);
      this.FilePathList.forEach(element => {
        element.path=element.path.toString().split("/")[1]+"/"+element.path.toString().split("/")[2];
        let filePathObj={path:element.path}
        this.productService.ProductFormForSave.imagePath.push(filePathObj);
      });
      console.log(this.productService.ProductFormForSave);
      this.finalSave();
    },
    err=>{
      console.log(err);
    }
   );
  }

  finalSave(){
    console.log("Final Start");
    this.productService.FinalSaveProduct().subscribe(res=>{
      console.log("Final Save Done")
      this.productService.ProductFormForSave=new Product();
      this.productService.fileToUpload=[];
      this.productService.StepCount=0;
      this.router.navigate(["productlist"]);
    },
    err=>{
      console.log(err);
    }
    );
  }
}
