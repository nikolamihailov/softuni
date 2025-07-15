import { ArticleI } from '../models/article.model';
import { data } from './seed';

export class ArticleData {
  getData(): ArticleI[] {
    return data;
  }
}
