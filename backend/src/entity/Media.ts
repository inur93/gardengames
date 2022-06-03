import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("media")
export class Media {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    url: string

    @Column({default: 0})
    width: number

    @Column({default: 0})
    height: number
}

export type CreateMedia = Pick<Media, "url" | 'height' | 'width'>
