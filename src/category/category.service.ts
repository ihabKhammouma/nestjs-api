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
  getAll() {
    return this.prisma.category.findMany();
  }
  getProductsByCategoryId(id: number, limit?: number, offset?: number) {
    return this.prisma.product.findMany({
      take: limit,
      skip: offset,
      where: {
        categories: {
          some: {
            id: id,
          },
        },
      },
    });
  }
}
