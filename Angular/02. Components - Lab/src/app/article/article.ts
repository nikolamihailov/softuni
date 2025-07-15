import { Component, Input } from '@angular/core';
import { ArticleI } from '../models/article.model';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class Article {
  @Input() article!: ArticleI;
  @Input() articleDesc!: string;
  private symbols: number = 100;
  descToShow: string;
  articleDescLength: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = 'Show Image';

  constructor() {
    this.articleDescLength = 0;
    this.descToShow = '';
  }

  readMore() {
    const desc = this.articleDesc;
    if (this.articleDescLength <= desc.length - this.symbols) {
      this.articleDescLength += this.symbols;
      this.descToShow = desc.substring(0, this.articleDescLength);
      return;
    }
    this.showReadMoreBtn = false;
    this.showHideBtn = true;
  }

  hideDesc() {
    this.showReadMoreBtn = true;
    this.showHideBtn = false;
    this.articleDescLength = 0;
    this.descToShow = '';
  }

  toggleImage() {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageButtonTitle === 'Show Image' ? 'Hide Image' : 'Show Image';
  }
}
