import { Component, OnInit,OnDestroy } from '@angular/core';
import { ProductService } from './../../product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit,OnDestroy {
  public products:{title:string}[];
  public filteredProducts:any[];
  public subscription:Subscription;
   
  constructor(private productService:ProductService) { 
  this.subscription=this.productService.getAll().valueChanges().subscribe(
    product=>this.filteredProducts=this.products=product
  )
  }
  public filter(query:string){
  this.filteredProducts=(query)?
  this.products.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())):
  this.products;
  }
  ngOnDestroy(){
  this.subscription.unsubscribe()
  }
  ngOnInit(): void {
  }

}
