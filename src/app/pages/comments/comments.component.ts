import { Component, inject } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'comments',
  imports: [RouterLink],
  providers: [CommentService],
  templateUrl: './comments.component.html',
  styles: ``,
})
export class CommentsComponent {
  private readonly commentService = inject(CommentService);
  readonly comments = this.commentService.getAllComments();
}
