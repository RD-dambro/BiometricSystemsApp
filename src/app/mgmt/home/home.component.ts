import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() components:string[] = [
    'devices',
    'samples',
    'galleries',
    'employees',
    'whitelists'
  ]
  path: Observable<any>
  constructor(private route: ActivatedRoute) { 
    this.path = this.route.url
  }

  ngOnInit(): void {
  }

}
