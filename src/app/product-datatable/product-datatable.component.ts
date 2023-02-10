import { AfterViewInit, Component, ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable,MatTableDataSource } from '@angular/material/table';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';
import { ProductDatatableDataSource, ProductDatatableItem } from './product-datatable-datasource';

@Component({
  selector: 'app-product-datatable',
  templateUrl: './product-datatable.component.html',
  styleUrls: ['./product-datatable.component.css']
})
export class ProductDatatableComponent implements AfterViewInit,OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Product>;
  dataSource: MatTableDataSource<Product>;

  
  Products:Product[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['imagePath','productName', 'price','stock','status'];
  
  constructor(private productService:ProductService) {
   //this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.productService.getAllProduct().subscribe(res=>{this.Products=res as Product[];
      console.log("thsi Product",this.Products);
      this.dataSource = new MatTableDataSource<Product>(this.Products);
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource)
    }
      ,err=>{ console.log(err)});
      
    
  }
  getImage(){
    return `http://localhost:3000/Image/pasta.jpg`;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }
  sortData(sort: any) { this.dataSource.sort = this.sort; }

  ngAfterViewInit(): void {
    //  this.dataSource.sort = this.sort;
     
    
  }
}
