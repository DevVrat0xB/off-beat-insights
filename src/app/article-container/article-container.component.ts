import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-container',
  templateUrl: './article-container.component.html',
  styleUrls: ['./article-container.component.scss'],
})
export class ArticleContainerComponent implements OnInit {
  title: string = 'Article Title'; // name of the article.
  summary: string =
    'This is article summary and it must be as short as possible.';
  chapter: string = 'Theory';
  body: string =
    'This will be the body of the article. It will be dynamic in nature as the content gets changed based on the chapter selected.';

  constructor() {}

  ngOnInit(): void {}
}
