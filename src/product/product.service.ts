import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { PrismaDbService } from 'src/prisma-db/prisma-db.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaDbService) {}
  async create(createProductDto: CreateProductDto) {
    let ids;
    if (createProductDto.categories) {
      ids = createProductDto.categories.map((id: number) => {
        return { id: id };
      });
      delete createProductDto.categories;
    }
    const product = await this.prisma.product.create({
      data: {
        ...createProductDto,
        categories: {
          connect: ids,
        },
      },
    });

    return product;
  }
}
