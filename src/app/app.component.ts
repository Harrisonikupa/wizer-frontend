import {Component, OnInit} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private router: Router) {}

  ngOnInit() {
    /*this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          $('#categories_table').dataTable();
          $('#books_table').dataTable();
        } else if (event instanceof NavigationEnd) {
          $('#categories_table').dataTable();
          $('#books_table').dataTable();
        }
      });*/
  }

}
