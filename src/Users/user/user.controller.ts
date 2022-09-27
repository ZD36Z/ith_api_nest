import { Body, Controller, Post } from '@nestjs/common';
import { stringify } from 'querystring';
import { userModel } from 'src/Models/user.model';
import { Users } from 'src/Models/Users';

@Controller('user')
export class UserController {
    constructor(){

    }
    @Post()
    Create(@Body() params: Users):void{
        console.log("名前： "+ params.name + "\n メール： "+ params.email+
        "\n 電話番号： "+ params.telefono);
    }
}
//Cambiar el nombre de la clase a User, que empiece con mayuscula, definir a los parametros como interface y no como clase
//No es necesario que el nombre de la clase o interface lleve el nombre de model