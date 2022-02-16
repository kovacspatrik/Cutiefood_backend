import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeIngredientController } from './recipe-ingredient.controller';
import { RecipeIngredient } from './recipe-ingredient.entity';
import { RecipeIngredientService } from './recipe-ingredient.service';

@Module({
  imports: [TypeOrmModule.forFeature([RecipeIngredient])],
  controllers: [RecipeIngredientController],
  providers: [RecipeIngredientService],
  exports: [RecipeIngredientService],
})
export class RecipeIngredientModule {}
