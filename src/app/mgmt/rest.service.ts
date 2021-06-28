import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Bio } from './models';

interface Result {
  [key: string]: Bio[]
}

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private url = 'http://localhost:3000/'
  private endpoint: string
  private itemsUpdated = new Subject<Result[]>()

  subscriptions: Subscription[] = []
  
  destroy = () => {
    this.subscriptions.forEach(s => s.unsubscribe())
  }
  
  fetchAll = (endpoints:string[]) => {
    const itemList: Result[] = []
    //get all dependencies
    endpoints.forEach(endpoint => {
      let s = this.http.get(this.url + endpoint)
        .subscribe(data => {
          let item: Result = {}
          item[endpoint] = [...Object.values(data)]
          itemList.push(item)
          this.itemsUpdated.next([...itemList])
          console.log(item)
        },
        err => {
          console.error(err)
        }
        )
      this.subscriptions.push(s)
    })
  }

  getItemsUpdated = () => {
    return this.itemsUpdated.asObservable()
  }

  addItem = (item: Bio, endpoint: string) => {
    console.log(`Adding item to ${endpoint}`)
    let s = this.http.post(this.url+endpoint, item)
    .subscribe(data => {
      console.log(data)
    })

    this.subscriptions.push(s)
  }

  
  constructor(private http: HttpClient) { 
  }
}
