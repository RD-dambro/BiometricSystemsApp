import { Component, Input, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Gallery } from '../items/item.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() gallery: Gallery = new Gallery()
  rest: RestService

  constructor() { 
  }

  ngOnInit(): void {
  }

}
