import { IsString, IsNotEmpty, MinLength, IsEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty({ message: 'Nome da categoria não pode ser vazio' })
  name: string;
}
