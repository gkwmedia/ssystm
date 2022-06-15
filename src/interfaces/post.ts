import { User } from "./user";

export interface Post {
  id: number;
  author: User;
  title: string;
  categories: string[];
  reply_count: number;
  most_recent_comment: { commenter: User; time: number };
}
