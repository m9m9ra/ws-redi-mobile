import {PrimaryGeneratedColumn, Entity} from "typeorm";

@Entity(`Settings`)
export class Settings {

    @PrimaryGeneratedColumn()
    id: number | undefined

}