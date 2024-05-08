import { Component, Input } from '@angular/core';

@Component({
      selector: 'article-details',
      template: `
            <img class="articles__thumb-small" alt="" src="{{ blog.thumbnail }}" />
            <div class="articles__wrap-content">
                  <h3 class="articles__name-small">{{ blog.title }}</h3>

                  <p class="articles__text-small">{{ blog.description }}</p>
                  <p class="articles__date">{{ blog.createdAt }}</p>
            </div>
      `,
      styleUrl: './top-articles.component.scss',
})
export class ArticleCardDetailsComponent {
      @Input() blog: any;
}
