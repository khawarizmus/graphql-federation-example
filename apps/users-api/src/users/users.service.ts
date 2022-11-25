import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'David',
    },
  ];

  create(createUserInput: CreateUserInput) {
    const id = this.users.length + 1;
    this.users.push(
      Object.assign(createUserInput, {
        id,
      }),
    );
    return this.users[id - 1];
  }

  findAll() {
    return this.users;
  }

  findById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return (this.users[id - 1] = Object.assign(
      this.users[id - 1],
      updateUserInput,
    ));
  }

  remove(id: number) {
    const start = id - 1;
    const deleteCount = 1;
    return this.users.splice(start, deleteCount)[0];
  }
}
