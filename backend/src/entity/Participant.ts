

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Score } from "./Score"

@Entity()
export class Participant {

    constructor(id?: number, name?: string, nickname?: string) {
        if (id) this.id = id;
        if (name) this.name = name;
        if (nickname) this.nickname = nickname;
    }
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    nickname?: string

    @OneToMany(() => Score, score => score.player)
    scores: Score[]
}


export type CreateParticipant = Omit<Participant, 'id' | 'scores'>