import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private users: UsersService) {}

  @Get('/')
  getAllUsers() {
    return this.users.getAllUsers();
  }
}
