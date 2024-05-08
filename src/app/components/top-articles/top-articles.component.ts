import { Component } from '@angular/core';

@Component({
      selector: 'app-top-articles',
      templateUrl: './top-articles.component.html',
      styleUrl: './top-articles.component.scss',
})
export class TopArticlesComponent {
      listBlog = [
            {
                  id: 1,
                  title: 'The real voyage does not consist in seeking new',
                  description:
                        'Excited him now natural saw passage offices you minuter. At by asked being court hopes.',
                  createdAt: 'Jun 1, 2022',
                  thumbnail: '../../../assets/images/article-1.png',
            },
            {
                  id: 2,
                  title: 'Mountains is always right destination.',
                  description: 'Mountains is always right destination.',
                  createdAt: 'Jun 1, 2022',
                  thumbnail: '../../../assets/images/article-2.png',
            },
            {
                  id: 3,
                  title: "Here Our's Life is either a daring adventure.",
                  description: 'One of the programs is Save Our I have personally.',
                  createdAt: 'Jun 1, 2022',
                  thumbnail: '../../../assets/images/article-3.png',
            },
            {
                  id: 4,
                  title: "Here Our's Life is either a daring adventure.",
                  description: "Life is either a daring adventure or it's nothing",
                  createdAt: 'Jun 1, 2022',
                  thumbnail: '../../../assets/images/article-4.png',
            },
      ];
}
