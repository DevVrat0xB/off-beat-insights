import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  // options that are shown in the navigation bar.
  options: string[] = ['Home', 'Articles', 'About'];

  constructor() {}

  ngOnInit(): void {}
}
