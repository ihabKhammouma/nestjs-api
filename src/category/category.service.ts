import { Injectable } from '@nestjs/common';
import { PrismaDbService } from 'src/prisma-db/prisma-db.service';
import { CreateCategoryDto } from './dto';
@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaDbService) {}
  async createCategory(dto: CreateCategoryDto) {
    const category = await this.prisma.category.create({
      data: {
        ...dto,
      },
    });

    return category;
  }
}
