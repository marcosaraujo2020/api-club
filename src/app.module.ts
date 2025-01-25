import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClubModule } from './club/club.module';
import { PlayerModule } from './player/player.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      logging: false,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      //migrations: ['src/migrations/**/*.ts'],
      synchronize: true,
    }),
    ClubModule,
    PlayerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
