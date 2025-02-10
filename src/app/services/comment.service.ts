import { inject, Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';
import { Comment } from '../types/comment';

@Injectable()
export class CommentService {
  private readonly api = inject(ApiService);
  private comments = signal<Comment[]>([]);

  constructor() {
    this.fetchDatas();
  }

  private async fetchDatas() {
    try {
      const response = await this.api.get<Comment[]>(
        'https://jsonplaceholder.typicode.com/comments'
      );
      if (!response.data) {
        return response.error;
      }

      this.comments.set(response.data);
      return;
    } catch (error) {
      throw new Error(`Erreur: ${error}`);
    }
  }

  getAllComments() {
    return this.comments;
  }

  getCommentById(id: number) {
    return this.comments().find((comment) => comment.id === id);
  }
}
