import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./pages/users/users.component').then((c) => c.UsersComponent),
  },
  {
    path: 'users/:id',
    loadComponent: () =>
      import('./pages/one-user/one-user.component').then(
        (c) => c.OneUserComponent
      ),
  },
  {
    path: 'comments',
    loadComponent: () =>
      import('./pages/comments/comments.component').then(
        (c) => c.CommentsComponent
      ),
  },
  {
    path: 'comments/:id',
    loadComponent: () =>
      import('./pages/one-comment/one-comment.component').then(
        (c) => c.OneCommentComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
];
