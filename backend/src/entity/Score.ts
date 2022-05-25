

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Game } from "./Game"
import { Participant } from "./Participant"

@Entity()
export class Score {

    constructor(gameId?: number, playerId?: number, score?: number) {
        if (gameId) this.game = new Game(gameId);
        if (playerId) this.player = new Participant(playerId);
        if (score) this.score = score;
    }
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Game, game => game.scores)
    game: Game

    @ManyToOne(() => Participant, player => player.scores)
    player: Participant

    @Column()
    score: number

}

export type CreateScore = {
    game: number,
    participants: number[]
}