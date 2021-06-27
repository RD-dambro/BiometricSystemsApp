import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { Bio } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService implements OnInit{
  private url = 'http://localhost:3000/'
  private endpoint: string
  private items: Bio[] = []
  private itemsUpdated = new Subject<Bio[]>()
  
  
  fetchAll = (endpoint:string) => {
    // console.log(`Getting all from ${this.url}${this.endpoint}`)
    this.http.get(this.url + endpoint)
    .subscribe(data => {
      this.items = [...Object.values(data)]
      this.itemsUpdated.next([...this.items])
    },
     err => {
       console.error(err)
     }
    )
  }

  getItemsUpdated = () => {
    return this.itemsUpdated.asObservable()
  }
  // getItems = (endpoint: string) => {
  //   console.log(`Getting all from ${this.url}${endpoint}`)
  //   return[...this.items]
  // }

  addItem = (item: Bio, endpoint: string) => {
    console.log(`Adding item to ${endpoint}`)
    this.http.post(this.url+endpoint, item)
    .subscribe(data => {
      console.log(data)
    })
    this.items.push(item)
    this.itemsUpdated.next([...this.items])
  }

  
  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void { 
  }
}
