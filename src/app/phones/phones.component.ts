import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from '../shared/services/event.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {

  private subscription: Subscription = new Subscription()

  mobileScreen = true

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit(): void {

    this.subscription.add(
      this.eventService.getFullScreenEvent().subscribe(screen => {
        this.mobileScreen = screen['mobileScreen']
      })
    )
  }

}
