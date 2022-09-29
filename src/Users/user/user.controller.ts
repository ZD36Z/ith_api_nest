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
    getUser(@Param('correo') param) : Users{
        return this.userService.getByCorreo(param)
    }
    validar(request: Users){
        if(request!= undefined){
            return request
        }else{
            console.log("El usuario no existe")
        }
    }
}
