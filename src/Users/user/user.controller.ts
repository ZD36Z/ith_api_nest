import { Body, Controller, Post } from '@nestjs/common';
import { stringify } from 'querystring';
import { userModel } from 'src/Models/user.model';

@Controller('user')
export class UserController {
    constructor(){

    }
    @Post()
    Create(@Body() params: userModel):void{
        console.log("El nombre es "+ params.name + "\n El correo es "+ params.email+
        "\n el número es "+ params.name);
    }
}
