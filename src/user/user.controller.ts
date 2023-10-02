import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ description: 'Rota para listar todos os usuários.' })
  @Get()
  async listarUser() {
    return this.userService.listarUser();
  }

  @ApiOperation({ description: 'Rota para criar usuário' })
  @Post('create')
  async cadastrarUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.cadastrarUser(createUserDto);
  }

  @ApiOperation({ description: 'Rota para login.' })
  @Post('login')
  async login(@Body() data: LoginDto) {
    return this.userService.loginUser(data);
  }

  @Get(':nome')
  async encontrarUser(@Param('nome') nome: string) {
    return this.userService.encontrarUser(nome);
  }

  @Delete('delete/:nome')
  async deletarUser(@Param('nome') nome: string) {
    return this.userService.deletarUser(nome);
  }
}
