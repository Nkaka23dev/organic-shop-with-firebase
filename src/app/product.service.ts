import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  public create(product){
  this.db.list('/products').push(product)
  }
  public getAll():AngularFireList<any>{
    return this.db.list('/products');
  }
}
