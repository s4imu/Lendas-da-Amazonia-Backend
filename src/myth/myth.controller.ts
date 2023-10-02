import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { MythService } from './myth.service';
import { CreateMythDto } from './dto/create-myth.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('myth')
@ApiTags('Myth')
export class MythController {
  constructor(private readonly mythService: MythService) {}

  @ApiOperation({ description: 'Rota para listar todas as lendas.' })
  @Get()
  async listarMyth() {
    return this.mythService.listarMyth();
  }

  @ApiOperation({ description: 'Rota para criar lenda' })
  @Post('create')
  async cadastrarMyth(@Body() createMythDto: CreateMythDto) {
    return this.mythService.cadastrarMyth(createMythDto);
  }

  @Get(':titulo')
  async encontrarMyth(@Param('titulo') titulo: string) {
    return this.mythService.encontrarMyth(titulo);
  }

  @Delete('delete/:titulo')
  async deletarMyth(@Param('titulo') titulo: string) {
    return this.mythService.deletarMyth(titulo);
  }
}
