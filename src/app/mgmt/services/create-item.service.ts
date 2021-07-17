import { Injectable } from '@angular/core';
import { Bio } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CreateItemService {
  last_item: Bio
  
  constructor() { }
}
