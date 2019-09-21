import { NewsResponseType } from './news-response-type';
import { PaginationType } from './pagination-type';

export type NewsListResponseType = PaginationType<NewsResponseType>;
