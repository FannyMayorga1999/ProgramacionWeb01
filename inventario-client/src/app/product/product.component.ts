import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/model/ProductModel';
import {ServicesService} from '../../app/server.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  /*template: `
  <div [ngClass]="{
    'activeClass': condition,
    'inactiveClass': !condition,
    'focusClass': condition && otherCondition
  }"> 
   Little boy jump over the wall
  </div>
`,*/
})
export class ProductComponent implements OnInit {

  url01 = 'products'
  products : Array<ProductModel>;
  product : ProductModel;
  name : "";
  
  constructor(private service:ServicesService) { }

  ngOnInit() {
    this.product = new ProductModel();

    this.products = new Array<ProductModel>();
    this.getProducts()
  }

  getProducts() {
    this.service.get(this.url01).subscribe(
      response => {
        this.products = response['products'];
      },
      error => {
        console.log(error);
      }
    );
  } 



  createProduct(){
    console.log(this.product.category);
    this.service.post(this.url01,{'product':this.product, 'category':this.product.category}).subscribe(
      response => {
        this.getProducts();
        console.log("oh si "+response);
      },
      error => {
        console.log("oh no "+error);
      }
    );
  }
  updateProduct(products:ProductModel){
    this.service.put(this.url01,{'product':this.product, 'category':this.product.category}).subscribe(
      response => {
        this.getProducts();
        console.log("oh si "+response);
      },
      error => {
        console.log("oh no "+error);
      }
      
    );
  }
  deleteProduct(products:ProductModel){
    this.service.delete(this.url01).subscribe(
      response => {
        this.getProducts();
        console.log("oh si "+response);
      },
      error => {
        console.log(error);
        console.log("oh no "+error);
      } 
    );
  }

}