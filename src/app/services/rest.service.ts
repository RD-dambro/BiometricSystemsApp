import { Injectable } from '@angular/core';
import { IDevice, IEmployee, IGallery, ISample, IWhitelist } from '../core/items/item.model';

type Bio = IDevice | IEmployee | IGallery | ISample | IWhitelist

@Injectable({
  providedIn: 'root'
})
export class RestService {
  type: string
  baseurl = 'http://localhost:3000/'
  url: string 
  items: Bio | any

  delete = () => {
    
    console.log(`deliting one on ${this.url}`)  
  }
  update = () => {
    console.log(`updating one on ${this.url}`)  
  }
  getOne = () => {
    console.log(`getting one ${this.url}`)
  }
  getAll = () => {
    console.log(`getting all ${this.url}`)
    return []
  }
  create = () => {
    console.log(`creating new ${this.type} on ${this.url}`)
  }

  d = {
    'post': this.create,
    'put': this.update,
    'delete': this.delete
  } 

  submit = (method) => {
    this.d[method]()
  }
  
  constructor(endpoint: string) { 
    this.type = endpoint
    this.url = this.baseurl + endpoint
    this.items = this.getAll()
  }
}
