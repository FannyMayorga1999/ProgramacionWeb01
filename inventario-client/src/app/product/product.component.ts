import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/model/ProductModel';
import {ServicesService} from '../../app/server.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  url01 = 'products'
  products : Array<ProductModel>;
  product : ProductModel;
  
  constructor(private service:ServicesService) { }

  ngOnInit() {
    this.product = new ProductModel();
    this.products = new Array<ProductModel>();
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
    this.service.post(this.url01,this.products).subscribe(
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
    this.service.put(this.url01,this.products).subscribe(
      response => {
        this.getProducts();
        console.log(response);
      },
      error => {
        console.log(error);
      }
      
    );
  }
  deleteProduct(products:ProductModel){
    this.service.delete(this.url01).subscribe(
      response => {
        this.getProducts();
        console.log(response)
      },
      error => {
        console.log(error);
      } 
    );
  }

}
