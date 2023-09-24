import { ApiProperty } from '@nestjs/swagger';

export class CreateMythDto {
  @ApiProperty()
  titulo: string;

  @ApiProperty()
  id_autor: string;

  @ApiProperty()
  texto: string;
}
