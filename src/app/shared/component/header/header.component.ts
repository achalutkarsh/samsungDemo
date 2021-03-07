import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private subscription: Subscription = new Subscription()

  mediumScreen = true
  lowScreen = true

  selectedHeader = ''

  currentRouterURL

  constructor(
    private router: Router,
    private eventService: EventService,
  ) { }

  ngOnInit(): void {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {

        this.currentRouterURL = this.router.url

        this.updateHeader()
      }
    })

    this.subscription.add(
      this.eventService.getFullScreenEvent().subscribe(screen => {
        this.mediumScreen = screen['mediumScreen']
        this.lowScreen = screen['lowScreen']
      })
    )

  }

  updateHeader() {
    if (this.currentRouterURL === '/smartphones') {
      this.selectedHeader = 'Highlights'
    } 
  }

  hoverHeader(val) {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
