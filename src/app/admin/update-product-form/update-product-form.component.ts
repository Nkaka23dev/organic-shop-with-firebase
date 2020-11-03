import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../category.service';
import { map, take } from 'rxjs/operators';
import { ProductService } from './../../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product-form',
  templateUrl: './update-product-form.component.html',
  styleUrls: ['./update-product-form.component.css']
})
export class UpdateProductFormComponent implements OnInit {
  public product:any={};
  public categories$;
  public id;
  constructor(
    private categoryService:CategoryService,
    private route:ActivatedRoute,
    private productService:ProductService,
    private router:Router
    ){
    // this.client = db.list('/categories');
    this.categories$ = this.categoryService.getCategory()
     .snapshotChanges().pipe(
      map(res => res.map(c => ({ key: c.payload.key, ...c.payload.val() 
    }))
   ));
   this.id=this.route.snapshot.paramMap.get('id')
   if (this.id) this.productService.getProduct(this.id)
      .valueChanges().pipe(take(1)).subscribe(
     p=>this.product=p
   )
  }
  public edit(product){ 
   if(this.id) this.productService.update(this.id,product)
  // this.productService.create(product) 
  this.router.navigate(['/admin/products'])
  }
  public delete(){
   if(!confirm('Are you sure you want to delete this product')) return;
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
   
  }
 
  ngOnInit(): void {
  }


}
