import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  public create(product){
  return this.db.list('/products').push(product)
  }
  public getAll():AngularFireList<any>{
    return this.db.list('/products');
  }
  public getProduct(productId){
   return this.db.object('/products/'+productId)
  }
  public update(productId,product){
  return this.db.object('/products/'+productId).update(product)
  }
  public delete(productId){
  return this.db.object('/products/'+productId).remove()
  }
}
