import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UsersEntity } from './domain/users/entity/users.entity';
import { UsersModule } from './domain/users/users.module';

@Module({
  imports: [UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_crud',
      entities: [UsersEntity],
      synchronize: false,
    }),
  ],
  controllers: [/*Já coloquei o controler, ele vem por defaul dentro do UsersModule*/],
  providers: [AppService],
})
export class AppModule { }
