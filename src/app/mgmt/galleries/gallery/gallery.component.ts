import { Component, OnInit } from '@angular/core';
import { galleryFormTemplate, galleryRelationLookup } from '../../models';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  endpoint='galleries'
  ft = galleryFormTemplate
  rl = galleryRelationLookup

  constructor() { }

  ngOnInit(): void {
  }

}
