import { inject } from 'inversify';
import { Body, Controller, Get, Post, Route, Tags } from 'tsoa';
import { CreateGame, Game } from '../entity/Game';
import { CreateScore, Score } from '../entity/Score';
import { provideSingleton } from '../inversify/provideSingleton';
import { GameRepository } from '../repositories/GameRepository';
import { ScoreRepository } from '../repositories/ScoreRepository';

@Tags('Game')
@Route('api/games')
@provideSingleton(GameApi)
export class GameApi extends Controller {

    constructor(
        @inject(GameRepository) private repo: GameRepository,
        @inject(ScoreRepository) private scoreRepo: ScoreRepository
    ) {
        super();
    }

    @Get("")
    public async getGames(): Promise<Game[]> {
        return await this.repo.all();
    }

    @Post("")
    public async createGame(@Body() data: CreateGame): Promise<Game> {
        return await this.repo.create(data);
    }

    @Post("{id}/score")
    public async createScore(@Body() data: CreateScore): Promise<Score[]> {
        if (!data.participants?.length) {
            throw new Error("Invalid participants");
        }

        //find duplicates
        const hasDuplicates = data.participants
            .map(x => data.participants.filter(p => p === x).length)
            .find(x => x > 1)
        if (hasDuplicates) {
            throw new Error("One or more participants have been added twice")
        }

        let score = Math.max(data.participants.length, 3);
        const scores = data.participants.map(x => new Score(data.game, x, score--))

        const promises = scores.map(x => this.scoreRepo.create(x));
        return await Promise.all(promises);
    }
}