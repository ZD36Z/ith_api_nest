import { Body, Controller, Post } from '@nestjs/common';
import { stringify } from 'querystring';
import { userModel } from 'src/Models/user.model';

@Controller('user')
export class UserController {
    constructor(){

    }
    @Post()
    Create(@Body() params: userModel):void{
        console.log("名前： "+ params.name + "\n メール： "+ params.email+
        "\n 電話番号： "+ params.telefono);
    }
}
