import { AfterViewInit, Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
      selector: 'app-header',
      templateUrl: './header.component.html',
      styleUrl: './header.component.scss',
})
@Injectable({
      providedIn: 'root',
})
export class HeaderComponent implements OnInit, AfterViewInit {
      listItemsNavigation = [
            {
                  title: 'Home',
                  path: '/',
                  active: false,
            },
            {
                  title: 'Destination',
                  path: 'destinations',
                  active: false,
            },
            {
                  title: 'About',
                  path: 'about',
                  active: false,
            },
            {
                  title: 'Blog',
                  path: 'blog',
                  active: false,
            },
            {
                  title: 'Tours',
                  path: 'tours',
                  active: false,
            },
      ];

      showNavigation: boolean = false;

      constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
      ngOnInit(): void {
            let result = [...this.listItemsNavigation];
            // result[0].active = true;
      }

      ngAfterViewInit(): void {
            //   console.log(this.activatedRoute.snapshot.url.join('/'));
      }

      toggleShowNaigation() {
            this.showNavigation = !this.showNavigation;
      }

      hideNavigation() {
            this.showNavigation = false;
      }

      navigateToAnotherRoute(path: string) {
            this.router.navigate([path]);
      }

      handerClickNavItem(title: string, path: string) {
            for (let i = 0; i < this.listItemsNavigation.length; ++i) {
                  if (this.listItemsNavigation[i].title === title) {
                        this.listItemsNavigation[i].active = true;
                        continue;
                  }
                  this.listItemsNavigation[i].active = false;
            }

            this.router.navigate([path]);

            //this.router.navigate([path]);
            //console.log(this.activatedRoute.snapshot.url.toString());
      }
}
