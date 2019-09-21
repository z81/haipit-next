import { SourceResponseType } from './source-response-type';

export type NewsResponseType = {
  id: number;
  user_id: number | null;
  source_id: number;
  group_id: number;
  type_id: number;
  views_count: number;
  clicks_count: number;
  created_at: string;
  updated_at: string;
  messages_count: string;
  link: string;
  description: string;
  title: string;
  timestamp: string;
  status: number;
  push_sent_at: null;
  email_sent_at: null;
  source: SourceResponseType;
  user: null;
  categories: null[];
  tags: null[];
};
