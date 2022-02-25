import {
    Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post
} from '@nestjs/common';
import { UsersDTO } from '../domain/users/dto/users.dto';
import { UsersService } from '../domain/users/service/users.service';


@Controller()
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    async showAllUsers() {
        return this.usersService.showAll();
    }

    @Post()
    async createUsers(@Body() data: UsersDTO) {
        const user = await this.usersService.create(data);
        return {
            statusCode: HttpStatus.OK,
            message: 'User criado com Sucesso!',
            user
        };
    }

    @Get(':id')
    async readUser(@Param('id') id: number) {
        const data = await this.usersService.read(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'User buscado com sucesso',
            data,
        };
    }
    //TODO: Revisar implementação
    @Get(':email')
    async readUserByEmail(@Param('email') email: string) {
        const data = await this.usersService.findByEmail(email);
        console.log(data);

        return {
            statusCode: HttpStatus.OK,
            message: 'User buscado por e-mail com sucesso',
            data,
        };
    }

    @Patch(':id')
    async uppdateUser(@Param('id') id: number, @Body() data: UsersDTO) {
        await this.usersService.update(id, data);
        return {
            statusCode: HttpStatus.OK,
            message: 'User updated com Sucesso!',
        };
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
        await this.usersService.destroy(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'User deletado com Sucesso!',
        };
    }
}