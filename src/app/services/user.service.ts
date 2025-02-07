import { inject, Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../types/user';

@Injectable()
export class UserService {
  private readonly api = inject(ApiService);
  private users = signal<User[]>([]);

  constructor() {
    this.fetchUsers();
  }

  private async fetchUsers() {
    try {
      const response = await this.api.get<User>(
        'https://jsonplaceholder.typicode.com/users'
      );

      if (!response.data) {
        return response.error;
      }

      this.users.set(response.data);
      return;
    } catch (error) {
      throw new Error(`Erreur : ${error}`);
    }
  }

  getUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users().find((user) => user.id === id);
  }
}
