import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metadata-container',
  templateUrl: './metadata-container.component.html',
  styleUrls: ['./metadata-container.component.scss'],
})
export class MetadataContainerComponent implements OnInit {
  // different sections or chapters of the article.
  chapters: string[] = [
    'Pre-Requisites',
    'Theory',
    'Practical',
    'Troubleshoot',
  ];

  // name of the author of the article.
  author: string = 'Sheldon';

  // date on which article was published.
  dateCreated: string = '25th Feb, 2021';

  // date when the article was recently updated.
  dateModified: string = '25th Feb, 2021';

  constructor() {}

  ngOnInit(): void {}
}
