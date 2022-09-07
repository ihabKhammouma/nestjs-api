import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto';

@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}
  @Post()
  create(@Body() dto: CreateCategoryDto) {
    return this.categoryService.createCategory(dto);
  }
  @Get()
  getAll() {
    return this.categoryService.getAll();
  }
  @Get(':id/products')
  findOne(
    @Param('id') id: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
  ) {
    console.log(offset);
    return this.categoryService.getProductsByCategoryId(
      +id,
      parseInt(limit),
      parseInt(offset),
    );
  }
}
