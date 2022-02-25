import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {

  const port = process.env.PORT || 3000;

  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('CRUD Users example with NestJS and MySQL')
    .setDescription('The user API description')
    .setVersion('1.0')
    .addTag('Users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(port);
}
bootstrap();