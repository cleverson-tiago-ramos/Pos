import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'; // CORREÇÃO AQUI: 'type' removido
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module'; // Vamos adicionar o CategoriesModule de volta
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // É uma boa prática importar o ConfigModule aqui também
      useFactory: typeOrmConfig,
      inject: [ConfigService],
    }),
    CategoriesModule, // Adicionei o CategoriesModule de volta
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
