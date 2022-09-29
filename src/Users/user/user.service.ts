import { Injectable } from '@nestjs/common';
import { Users } from 'src/Models/Users';

@Injectable()
export class UserService {
  private readonly usersArray: Users[] = []

  create (usuario : Users){
    this.usersArray.push(usuario)
  }

  getAll(): Users[]{
    return this.usersArray

  }
  getByCorreo(correo : string): Users{
    return this.usersArray.find((value) => value.correo == correo)

  }
}