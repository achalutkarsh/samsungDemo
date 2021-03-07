import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

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

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
