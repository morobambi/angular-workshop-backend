import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {User} from './user.entity';
import {ApiOkResponse} from '@nestjs/swagger';

@Controller('api')
export class UserController {

    users: Map<string, User> = new Map();

    @ApiOkResponse({description: 'Get all users'})
    @Get('user')
    get(): User[] {
        return Array.from(this.users).map(([email, user]) => user);
    }

    @ApiOkResponse({description: 'Create or update user'})
    @Post('user')
    save(@Body() user: User) {
        this.users.set(user.email, user);
    }

    @ApiOkResponse({description: 'Delete user'})
    @Delete('user/:email')
    delete(@Param('email') email: string) {
        this.users.delete(email);
    }
}
