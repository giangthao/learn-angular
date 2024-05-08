import { Component, Injectable, OnInit } from '@angular/core';

@Component({
      selector: 'header-only',
      templateUrl: './header-only.component.html',
      styleUrl: './header-only.component.scss',
})
@Injectable({
      providedIn: 'root',
})
export class HeaderOnlyComponent implements OnInit {
      constructor() {}

      public ngOnInit(): void {}
}
