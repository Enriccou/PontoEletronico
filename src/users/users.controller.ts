import {
  Body,
  Controller,
  Delete,
  Get,
  Injectable,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { UsersService } from "./shared/user.service";
import { User } from "./shared/user";

@Controller("users")
@Injectable()
export class UsersController {

  constructor(public usersService: UsersService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return this.usersService.getAll();
  }

  @Get(":id")
  async getById(@Param("id") id: string): Promise<User> {
    return this.usersService.getById(id);
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() user: User): Promise<User> {
    return this.usersService.update(id, user);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.usersService.delete(id);
  }
}
