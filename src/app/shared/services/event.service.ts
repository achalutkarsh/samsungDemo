import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  private fullScreenSubject = new Subject<JSON>()


  sendFullScreenEvent(enabled): void {
    this.fullScreenSubject.next(enabled)
  }

  getFullScreenEvent(): Subject<JSON> {
    return this.fullScreenSubject
  }
}
