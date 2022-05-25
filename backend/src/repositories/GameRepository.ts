import { AppDataSource } from "../data-source";
import { CreateGame, Game, GameIndividualScore } from "../entity/Game";
import { Participant } from "../entity/Participant";
import { Score } from "../entity/Score";
import { provideSingleton } from "../inversify/provideSingleton";

@provideSingleton(GameRepository)
export class GameRepository {


    private readonly repo = AppDataSource.getRepository(Game);

    public async create(game: CreateGame): Promise<Game> {
        const entity = this.repo.create(game);
        await this.repo.save(entity);
        return entity;
    }

    public async all(): Promise<Game[]> {
        const data = await this.repo.createQueryBuilder('game')
            .leftJoinAndSelect('game.scores', 'score')
            .leftJoinAndSelect('score.player', 'player')
            .groupBy("game.id")
            .addGroupBy('game.name')
            .addGroupBy("player.id")
            .addGroupBy("player.name")
            .select('game.id', 'id')
            .addSelect('game.name', 'name')
            .addSelect('player.name', 'playerName')
            .addSelect('SUM(score.score)', 'playerScore')
            .getRawMany<GameIndividualScore>();

        const list = data.reduce<Game[]>((list, row) => {
            let game = list.find(x => x.id === row.id);
            if (!game) {
                game = new Game(row.id, row.name);
                game.scores = []
                list.push(game);
            }

            const score = new Score();
            //playerScore is alias for SUM which is treated as a BIGINT which then converts to a string instead of a integer
            score.score = Number.parseInt(row.playerScore as unknown as string);
            score.game = new Game(game.id, game.name);
            score.player = new Participant(row.playerId, row.playerName);
            game.scores.push(score);


            return list;
        }, [])
        return list.map(x => {
            x.scores = x.scores.sort((a, b) => b.score - a.score)
            return x;
        })
    }
}