import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
