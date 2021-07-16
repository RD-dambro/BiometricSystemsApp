import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDevice } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StreamService {
  deviceSource = new Subject<IDevice>()
  device$: Observable<IDevice>
  deviceSub: Subscription

  streamSource = new Subject<boolean>()
  stream_exists$: Observable<boolean>
  stream_exists: boolean = false

  streamExists = async(source: string): Promise<boolean> => {
    return new Promise<boolean>((resolve) => {
      this.http.get(`${this.base_url}/api/streams`)
      .subscribe(res => {
        this.stream_exists = !!res['live']? !!res['live'][source] : false
        resolve(this.stream_exists)
      })
    })
  } 
  updateSource = (source: string): void => {
    this.streamExists(source)
    .then(res => {
      if(res){
        this.stream_key = source
      }
      this.streamSource.next(res)
    })
      
    
  }

  // base url is static and loaded from envirnoment
  get base_url(): string { return this._base_url; }
  private _base_url = `http://${environment.mediaHost}:${environment.mediaPort}`;

  // stream key is provided runtime and must be validated 
  // validation requisites:
  // - stream must exist
  // - TODO
  get stream_key(): string { return this._stream_key; }
  set stream_key(stream_key: string) {
    let sk = (stream_key && stream_key.trim()) || 'nokey';
    this._stream_key = `${environment.mediaApp}/${sk}`
  }

  private _stream_key = '';



  getStreamURL = () => {
    return this.stream_exists? `${this.base_url}/${this.stream_key}.flv`: null
  }

  constructor(
    private http:HttpClient
  ) { 
    this.device$ = this.deviceSource.asObservable()
    this.stream_exists$ = this.streamSource.asObservable()
    this.deviceSub = this.device$.subscribe(data => this.stream_key = data.name)
  }
}
