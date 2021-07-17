import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConnectionOptions, Producer, rabbitUrl } from './rabbit';

const config: ConnectionOptions = {
  exchange: environment.RABBIT.EXCHANGE,
  exchange_type: environment.RABBIT.EXCHANGETYPE,
  queue: environment.RABBIT.QUEUE
}

@Injectable({
  providedIn: 'root'
})
export class RabbitService {
  host: string = rabbitUrl

  producer: Producer

  startProducer = (key) => {
    this.producer = new Producer({...config, key: key})
  }

  constructor() { }
}
