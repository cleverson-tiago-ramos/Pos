import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello NestJs Aqui!';
  }
  postHello() {
    return 'Este é o Pos Em el servicet';
  }
}
