import { Component, Injectable, OnInit } from '@angular/core';

@Component({
      selector: 'default-layout',
      templateUrl: './default-layout.component.html',
      styleUrl: './default-layout.component.scss',
})
@Injectable({
      providedIn: 'root',
})
export class DefaultLayoutComponent implements OnInit {
      constructor() {}

      public ngOnInit(): void {}
}
