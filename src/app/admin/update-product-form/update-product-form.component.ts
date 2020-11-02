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
  public product;
  public categories$;
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
   let id=this.route.snapshot.paramMap.get('id')
   if (id) this.productService.getProduct(id).valueChanges().pipe(take(1)).subscribe(
     p=>this.product=p
   )
  }
  save(product){ 
  // this.productService.create(product) 
  // this.router.navigate(['/admin/products'])
  }
 
  ngOnInit(): void {
  }


}
