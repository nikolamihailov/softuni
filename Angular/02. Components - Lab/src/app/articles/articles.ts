import { Component, OnInit } from '@angular/core';
import { ArticleI } from '../models/article.model';
import { ArticleData } from '../data/data';
import { Article } from '../article/article';

@Component({
  selector: 'app-articles',
  imports: [Article],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles implements OnInit {
  articles: ArticleI[] = [];

  ngOnInit(): void {
    this.articles = new ArticleData().getData();
  }
}
