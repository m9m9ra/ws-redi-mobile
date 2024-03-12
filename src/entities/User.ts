import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity(`User`)
export class User {
    @PrimaryColumn()
    id: number | undefined

    @Column({nullable: true})
    token: string | undefined

    @Column({nullable: false, default: false})
    auth: boolean | undefined
}