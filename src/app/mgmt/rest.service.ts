import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bio } from './models';

interface Result {
  [key: string]: Bio[]
}

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private url = `http://${environment.webHost}:${environment.webPort}/`
  // private endpoint: string
  private relationsUpdated = new Subject<Result>()
  private itemsUpdated = new Subject<Bio[]>()
  private detailUpdated = new Subject<Bio>()

  subscriptions: Subscription[] = []
  
  destroy = () => {
    this.subscriptions.forEach(s => s.unsubscribe())
  }
  fetchDetail = (endpoint, item) => {
    this.http.get(`${this.url}${endpoint}/${item.id}/all`)
    .subscribe(data => this.detailUpdated.next((data as Bio)))
  }

  fetchItems = (endpoint: string) => {
    this.http.get(this.url + endpoint)
    .subscribe(data => {
      this.itemsUpdated.next([...Object.values(data)])
      // console.log(item)
    },
    err => {
      console.error(err)
    }
    )
  }

  fetchList = (endpoints:string[]) => {
    const items: Result = {}
    //get all dependencies
    endpoints.forEach(endpoint => {
      let s = this.http.get(this.url + endpoint)
        .subscribe(data => {
          items[endpoint] = [...Object.values(data)]
          this.relationsUpdated.next(items)
        },
        err => {
          console.error(err)
        }
        )
      this.subscriptions.push(s)
    })
  }
  getDetailUpdated = () => {
    return this.detailUpdated.asObservable()
  }

  getItemsUpdated = () => {
    return this.itemsUpdated.asObservable()
  }

  getRelationsUpdated = () => {
    return this.relationsUpdated.asObservable()
  }

  addItem = (item: Bio, endpoint: string) => {
    console.log(`Adding item to ${endpoint}`)
    return this.http.post(this.url+endpoint, item)
    // let s = this.http.post(this.url+endpoint, item)
    // .subscribe()

    // this.subscriptions.push(s)
  }

  
  constructor(private http: HttpClient) { 
  }
}
