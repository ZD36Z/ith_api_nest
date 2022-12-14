import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { get } from 'http';
import { stringify } from 'querystring';
import { userModel } from 'src/Models/user.model';
import { Users } from 'src/Models/Users';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){

    }
    @Post()
    Create(@Body() params: Users):void{
        this.userService.create(params);
        
    }

    @Get('/all')
    getUsers(): Users[]{
        return this.userService.getAll()

    }
    
    @Get('/:correo')
    getUser(@Param('correo') param) : Users | string{

        const user = this.userService.getByCorreo(param)
        //return user ? user : "El usuario no existe"
        return user ?? "El usuario no existe"
        
    }
}
