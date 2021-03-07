import { AfterContentChecked, AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataService } from './shared/services/data.service';
import { EventService } from './shared/services/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentChecked, AfterViewInit {

  style: any = null

  fullScreen = true

  @ViewChild('navbarContainer') navbarContainer

  title = 'achal';
  navbarHeight: number;
  footerHeight: number;

  screen = {
    fullScreen: false,
    mediumScreen: false,
    lowScreen: false,
    mobileScreen: false
  }

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    private dataService: DataService,
    private eventService: EventService
  ) { }

  ngOnInit() {
    if (this.router.url === '/professional') {
      this.router.navigate(['professional/home'])
    }
  }

  ngAfterViewInit(): void {
    this.navbarHeight =
      this.navbarContainer.nativeElement.getBoundingClientRect().height
  }


  ngAfterContentChecked(): void {
    this.style = this.sanitizer.bypassSecurityTrustStyle(`
      --screen-ht: ${document.documentElement.clientHeight}px;
      --screen-width: ${document.documentElement.clientWidth}px;
      --navbar-ht: ${this.navbarHeight}px;
  `)

    if (document.documentElement.clientWidth <= 1024) {
      this.screen.fullScreen = false
      this.screen.mediumScreen = false
      this.screen.lowScreen = true
      this.screen.mobileScreen = false
      this.eventService.sendFullScreenEvent(this.screen)
    } else if (document.documentElement.clientWidth <= 1300) {
      this.screen.fullScreen = false
      this.screen.mediumScreen = true
      this.screen.lowScreen = false
      this.screen.mobileScreen = false
      this.eventService.sendFullScreenEvent(this.screen)
    } else {
      this.screen.fullScreen = true
      this.screen.mediumScreen = false
      this.screen.lowScreen = false
      this.screen.mobileScreen = false
      this.eventService.sendFullScreenEvent(this.screen)
    }

    if (document.documentElement.clientWidth <= 784) {
      this.screen.mobileScreen = true
      this.eventService.sendFullScreenEvent(this.screen)
    }

  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {

  }

  @HostListener('scroll', ['$event'])
  scrollHandler(val) {
    if (val.target.scrollTop > 56) {
      document.getElementById('headerContainer').classList.add('fix-header')
    } else {
      document.getElementById('headerContainer').classList.remove('fix-header')
    }

    if (this.screen.mobileScreen) {
      if (val.target.scrollTop > 1140) {
        document.getElementById('animation-right').classList.add('animation-right')
        document.getElementById('animation-left').classList.add('animation-left')
      } else {
        document.getElementById('animation-right').classList.remove('animation-right')
        document.getElementById('animation-left').classList.remove('animation-left')
      }
    } else {
      if (val.target.scrollTop > 1500) {
        document.getElementById('animation-right').classList.add('animation-right')
        document.getElementById('animation-left').classList.add('animation-left')
      } else {
        document.getElementById('animation-right').classList.remove('animation-right')
        document.getElementById('animation-left').classList.remove('animation-left')
      }
    }

  }

}