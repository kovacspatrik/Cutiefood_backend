import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserShoppingListDto } from './dto/user-shopping-list.dto';
import { UserShoppingListService } from './user-shopping-list.service';

@Controller('user-shopping-list')
export class UserShoppingListController {
  constructor(private userShopListService: UserShoppingListService) {}

  @Get()
  read() {
    return this.userShopListService.readAll();
  }

  @Get('user/:id')
  async getUserShopList(@Param('id') id: number) {
    return await this.userShopListService.readShopListByUserId(id);
  }

  @Post('create')
  async create(@Body() data: UserShoppingListDto) {
    return this.userShopListService.create(data);
  }

  @Delete('delete/user/:userId/ingredient/:ingredientId')
  async DeleteUserFav(
    @Param('userId') userId: number,
    @Param('ingredientId') ingredientId: number,
  ) {
    this.userShopListService.deleteFromShoppingList(userId, ingredientId);
  }

  @Delete('clear/user/:userId')
  async clearUserShopList(@Param('userId') id: number) {
    return await this.userShopListService.clearShoppingList(id);
  }
}
