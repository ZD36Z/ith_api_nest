import {Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
//Las entities son las tablas (Tabla de detalles)
@Entity()

export class Details{
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    product : string

    @Column()
    quantity : number

    @Column()
    unit_price : number

    @Column ({default :0})
    id_sales : number

}