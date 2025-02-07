import { Component, effect, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../types/user';

@Component({
  selector: 'one-user',
  imports: [],
  providers: [UserService],
  templateUrl: './one-user.component.html',
})
export class OneUserComponent {
  readonly route = inject(ActivatedRoute);
  readonly userService = inject(UserService);
  readonly userId = Number(this.route.snapshot.paramMap.get('id'));

  readonly user = signal<User | undefined>(undefined);

  constructor() {
    effect(() => {
      const users = this.userService.getUsers();
      if (users().length > 0) {
        const foundUser = this.userService.getUserById(this.userId);

        if (!foundUser) {
          console.warn(`Utilisateur ID:${this.userId} introuvable`);
        }

        this.user.set(foundUser);
      }
    });
  }
}
