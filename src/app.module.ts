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
import { UserCalendarModule } from './user-calendar/user-calendar.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'eu-cdbr-west-02.cleardb.net',
      port: 3306,
      username: 'bb2a39c4542cff',
      password: '70b1fda4',
      database: 'heroku_c937c3423f14ddf',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    IngredientModule,
    RecipeModule,
    RecipeIngredientModule,
    UserModule,
    UserFavouriteRecipesModule,
    UserShoppingListModule,
    UserCalendarModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
