import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Student{
    
    // auto increment
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100
    })
    name: string

    @Column("int")
    level: number

    @Column("varchar")
    section: string
}
