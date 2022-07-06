import { User } from './entities/user.entity';
import { createUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 0,
      name: 'John',
    },
    {
      id: 1,
      name: 'Max',
    },
    {
      id: 2,
      name: 'Clarice',
    },
    {
      id: 3,
      name: 'Obed',
    },
    {
      id: 4,
      name: 'Clarice',
    },
  ];

  findAll(name?: string): User[] {
    if (name) return this.users.filter((user) => user.name === name);
    return this.users;
  }

  findById(userId: number): User {
    return this.users.find((user) => user.id === userId);
  }

  createUser(dto: createUserDto): User {
    const user = {
      id: Date.now(),
      ...dto,
    };

    this.users.push(user);

    return user;
  }
}
