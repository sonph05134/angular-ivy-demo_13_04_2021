import { AfterViewInit, Component, OnInit, VERSION } from '@angular/core';
import { PreloaderService } from './preloader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, AfterViewInit {
 
  constructor(
    private preloader: PreloaderService
  ){
  }
  ngOnInit(){
    this.preloader._setElement('globalLoader');
  }
  ngAfterViewInit(){
    this.preloader.hide();
  }
}
