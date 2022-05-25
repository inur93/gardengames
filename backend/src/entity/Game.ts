import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Score } from "./Score"

@Entity("game")
export class Game {

    constructor(id?: number, name?: string) {
        if (id) this.id = id;
        if (name) this.name = name;
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Score, score => score.game)
    scores: Score[]
}


export type CreateGame = Pick<Game, 'name'>

export type GameIndividualScore = {
    id: number
    name: string
    playerId: number
    playerName: string
    playerScore: number
}