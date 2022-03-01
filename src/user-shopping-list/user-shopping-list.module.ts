import { Module } from '@nestjs/common';
import { UserShoppingListService } from './user-shopping-list.service';
import { UserShoppingListController } from './user-shopping-list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserShoppingList } from './user-shopping-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserShoppingList])],
  providers: [UserShoppingListService],
  controllers: [UserShoppingListController],
})
export class UserShoppingListModule {}
