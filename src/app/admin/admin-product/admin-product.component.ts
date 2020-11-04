import { Component, OnInit,OnDestroy } from '@angular/core';
import { ProductService } from './../../product.service';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit,OnDestroy{
  // public products$;
  public products:{title:string}[];
  public filteredProducts:any[];
  public subscription:Subscription
  constructor(private productService:ProductService) { 
    this.subscription=this.productService.getAll().snapshotChanges()
    .pipe( map(res => res.map(c => ({ key: c.payload.key, ...c.payload.val() 
    }))
   )).subscribe(
     products=>this.filteredProducts=this.products=products
   )
  //  this.products$ = this.productService.getAll().snapshotChanges()
  //  .pipe( map(res => res.map(c => ({ key: c.payload.key, ...c.payload.val() 
  //  }))
  // ))
  }
  public filter(query:string){
  this.filteredProducts=(query)?
  this.products.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())):
  this.products;
  }
  ngOnDestroy(){
  this.subscription.unsubscribe();
  }
  ngOnInit(): void {
  }

}
