import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../category.service';
import { map } from 'rxjs/operators';
import { ProductService } from './../../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  // client:AngularFireList<any>;
  public categories$;
  public product;
  constructor(
    private categoryService:CategoryService,
    private route:ActivatedRoute,
    private productService:ProductService,
    private router:Router
    ){
    // this.client = db.list('/categories');
    this.categories$ = this.categoryService.getCategory().snapshotChanges().pipe(
      map(res => res.map(c => ({ key: c.payload.key, ...c.payload.val() 
    }))
   ));
   let id=this.route.snapshot.paramMap.get('id');
   if(id) this.productService.getProduct(id).valueChanges().subscribe(
     p=>this.product=p
   )
  }
  save(product){
  this.productService.create(product) 
  this.router.navigate(['/admin/products'])
  }
 
  ngOnInit(): void {
  }

}
