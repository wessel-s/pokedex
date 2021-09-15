import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-gameboy-container',
  templateUrl: './gameboy-container.component.html',
  styleUrls: ['./gameboy-container.component.scss'],
})
export class GameboyContainerComponent implements OnInit, AfterViewInit {
  @ViewChild('overflowScreen') overflowScreen: ElementRef;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        this.overflowScreen.nativeElement.scrollTop = 0;
      });
  }
}
