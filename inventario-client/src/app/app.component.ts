import { Component, OnInit  } from '@angular/core';
import { CategoryModel} from '../model/CategoryModel';
import {ServicesService} from '../app/server.service';
import { ProductModel } from 'src/model/ProductModel';
import { nsend } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'inventario-client';
  url = 'categories'
  url01 = 'products'

  categories: Array<CategoryModel>;
 
  constructor(private service:ServicesService) { 
  }

  ngOnInit() {
   
    

  }

  getCategories() {
    this.service.get(this.url).subscribe(
      response => {
        this.categories = response as Array<CategoryModel>;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  } 

  postCategory(){
    this.service.post(this.url,this.categories).subscribe(
      response => {
        this.getCategories
      },
      error => {
        console.log(error);
      }   
    );
  }
  putCategory(categories:CategoryModel){
    this.service.put(this.url,this.categories).subscribe(
      response => {
        this.getCategories();
      },
      error => {
        console.log(error);
      }
      
    );
  }
  deleteCategory(categories:CategoryModel){
    this.service.delete(this.url).subscribe(
      response => {
        this.getCategories();
      },
      error => {
        console.log(error);
      }
      
    );
  }
  /*-----------------------PRODUCTS---------------------------*/
 /* getProducts() {
    this.service.get(this.url01).subscribe(
      response => {
        this.products = response['products'];
      },
      error => {
        console.log(error);
      }
    );
  } 



  postProduct(){
    this.service.post(this.url01,this.products).subscribe(
      response => {
        this.getProducts
      },
      error => {
        console.log(error);
      }
      
    );
  }
  putProduct(products:ProductModel){
    this.service.put(this.url01,this.products).subscribe(
      response => {
        this.getProducts();
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
      },
      error => {
        console.log(error);
      }
      
    );
  }*/
}
