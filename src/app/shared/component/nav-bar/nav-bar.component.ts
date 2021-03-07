import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  private subscription: Subscription = new Subscription()

  fullScreen = true

  constructor(
    private dataService: DataService,
    private eventService: EventService
  ) { }

  ngOnInit(): void {

    this.subscription.add(
      this.eventService.getFullScreenEvent().subscribe(screen => {
        this.fullScreen = screen['fullScreen']
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
