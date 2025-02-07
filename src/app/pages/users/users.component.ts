import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'users',
  imports: [RouterLink],
  providers: [UserService],
  templateUrl: './users.component.html',
  styles: ``,
})
export class UsersComponent {
  private readonly userService = inject(UserService);
  readonly users = this.userService.getUsers();
}
