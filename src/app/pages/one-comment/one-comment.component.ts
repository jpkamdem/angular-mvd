import { Component, effect, inject, signal } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../types/comment';
import { ActivatedRoute } from '@angular/router';
import { RedirectButtonComponent } from '../../components/redirect-button/redirect-button.component';

@Component({
  selector: 'one-comment',
  imports: [RedirectButtonComponent],
  providers: [CommentService],
  templateUrl: './one-comment.component.html',
  styles: ``,
})
export class OneCommentComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly commentId = Number(this.route.snapshot.paramMap.get('id'));
  private readonly commentService = inject(CommentService);
  readonly comment = signal<Comment | undefined>(undefined);

  constructor() {
    effect(() => {
      const comments = this.commentService.getAllComments();
      if (comments().length <= 0) {
        return;
      }

      const foundComment = this.commentService.getCommentById(this.commentId);
      if (!foundComment) {
        console.warn(`Utilisateur ID:${this.commentId} introuvable`);
      }

      this.comment.set(foundComment);
    });
  }
}
