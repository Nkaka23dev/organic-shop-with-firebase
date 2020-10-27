import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  public products$;
  constructor(private productService:ProductService) { 
  this.products$=this.productService.getAll().snapshotChanges().pipe(
    map(res => res.map(c => ({ key: c.payload.key, ...c.payload.val() 
    }))  
  ))
  }

  ngOnInit(): void {
  }

}
