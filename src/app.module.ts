import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
import { PrismaDbModule } from './prisma-db/prisma-db.module';

@Module({
  imports: [
    CategoryModule,
    PrismaDbModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
