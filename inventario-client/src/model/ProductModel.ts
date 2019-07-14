import { CategoryModel } from './CategoryModel';

export class ProductModel {
    id: number;
    name: string;
    price: number;
    stock: number;
    category: CategoryModel; 

    constructor(){
        this.id = 0 ;
        this.name = "";
        this.price = 0 ;
        this.stock = 0 ;
        this.category = new CategoryModel();
    }
 }