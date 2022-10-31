import { Injectable } from '@nestjs/common';
import { User } from 'src/Models/User';
import { User as UserEntity } from '../../../entities/user.entity' 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor (
    @InjectRepository(UserEntity)
    private userEntity : Repository<UserEntity>
  ){}
  
  private readonly Users: User[] = []

  async create (user : User) {
    return await this.userEntity.insert(user)
  }

  getAll(): User[]{
    return this.Users
  }

  getByCorreo(correo : string): User{
    return this.Users.find((user) => user.correo === correo)
  }

  updateUserById(id: number, user : User): boolean{
    let user_index = this.Users.findIndex((user)=> user.id === id)
    
    if (this.userExists(id)){
      //Mantener los datos que no se van a actualizar 
      const new_user = Object.assign(this.Users[user_index], user)
      this.Users[user_index] = new_user
      return true
    }
    return false
  }
  
  /* La función verifica si un usuario existe o no
    Parametro id; id del usuario que queremos verificar si existe
    true si el usuario existe, y false si el usuario no existe */ 
  userExists(id:number){
    const index = this.Users.findIndex(usuario => usuario.id === id)
    return index !== -1
  }
  /*checkOldUser(olduser:Users, user_index:number){
    if(this.usersArray[user_index].id==undefined){
      this.usersArray[user_index].id = olduser.id
    }

    if(this.usersArray[user_index].nombre==undefined){
      this.usersArray[user_index].nombre = olduser.nombre
    }

    if(this.usersArray[user_index].correo==undefined){
      this.usersArray[user_index].correo = olduser.correo
    }

    if(this.usersArray[user_index].telefono==undefined){
      this.usersArray[user_index].telefono = olduser.telefono
    }
  }*/
}