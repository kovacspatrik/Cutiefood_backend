import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientModule } from './ingredient/ingredient.module';
import { RecipeModule } from './recipe/recipe.module';
import { RecipeIngredientModule } from './recipe-ingredient/recipe-ingredient.module';
import { UserModule } from './user/user.module';
import { UserFavouriteRecipesModule } from './user-favourite-recipes/user-favourite-recipes.module';
import { UserShoppingListModule } from './user-shopping-list/user-shopping-list.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Cityofocala2014',
      database: 'cutiefood_backend',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    IngredientModule,
    RecipeModule,
    RecipeIngredientModule,
    UserModule,
    UserFavouriteRecipesModule,
    UserShoppingListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
