import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import flvjs from 'flv.js';
import { environment } from 'src/environments/environment';
import { StreamService } from '../mgmt/services/stream.service';



@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit, OnDestroy {
  // uid: string = ''
  @ViewChild('target', {static: true}) target: ElementRef;
  videoNative
  player;
  touched: boolean = false
  show: boolean = false

  play = () => {
    this.load()
    this.player.load()
    this.player.play()
  };
  pause = () => {
    if(this.player)
    {
      this.player.pause();
      this.player.unload();
      this.player.destroy();
      this.player = undefined
    }
  }

  load = () => {
    if (flvjs.isSupported() && !this.player) {
      this.player = new flvjs.FlvPlayer({
        type: 'flv',
        isLive: true,
        hasAudio: true,
        hasVideo: true,
        url: this.ss.getStreamURL() 
      })
      this.player.attachMediaElement(this.target.nativeElement)
      console.log("attached")
    }
  }

  dispose = () => {
    if(this.player) {
      this.player.pause()
      this.player.unload()
      this.player.destroy()
      this.player = undefined
      console.log("disposed")
    }
  }

  reload = () => {
    this.dispose()
    this.load()
  }

  onStreamChanged = (stream) => {
    // this.show = this.ss.stream_exists
    // this.target.nativeElement.hidden = !this.show
    // this.dispose()
    if(!this.touched) this.touched = true
    this.videoNative.hidden = !stream
    if(stream) this.reload()
    else this.dispose()
    console.log(stream)
  }

  constructor( 
    private ss: StreamService
  ) { }

  ngOnInit(): void {
    this.videoNative = this.target.nativeElement
    this.videoNative.hidden = true
    this.ss.stream_exists$.subscribe(v => this.onStreamChanged(v))
  }

  ngOnDestroy() {
    console.log("destroy")
    this.dispose()
  }

}
