import { Game, Participant, Score, } from "../client";

const games: Game[] = [
    new Game({
        id: 1,
        name: "Stangtennis",
        scores: [
            new Score({
                id: 1,
                score: 123,
                player: new Participant({ id: 1, name: "Frederikke", nickname: "Bruden", scores: [] }),
                game: new Game({ id: 1, name: "Stangtennis", scores: [] }),
            }),
            new Score({
                id: 2,
                score: 12,
                player: new Participant({ id: 2, name: "Rúni", scores: [], }),
                game: new Game({ id: 1, name: "Stangtennis", scores: [] }),
            })
        ]
    }),
    new Game({
        id: 2,
        name: "Dåsekast",
        scores: [
            new Score({
                id: 3,
                score: 12,
                player: new Participant({ id: 1, name: "Frederikke", nickname: "Bruden", scores: [] }),
                game: new Game({ id: 1, name: "Dåsekast", scores: [] }),
            }),
            new Score({
                id: 4,
                score: 10,
                player: new Participant({ id: 2, name: "Rúni", scores: [], }),
                game: new Game({ id: 1, name: "Dåsekast", scores: [] }),
            }),
            new Score({
                id: 5,
                score: 9,
                player: new Participant({ id: 2, name: "Christian", scores: [], }),
                game: new Game({ id: 1, name: "Dåsekast", scores: [] }),
            }),
            new Score({
                id: 6,
                score: 4,
                player: new Participant({ id: 2, name: "Mads", scores: [], }),
                game: new Game({ id: 1, name: "Dåsekast", scores: [] }),
            })
        ]
    }),
    new Game({
        id: 3,
        name: "Crocket",
        scores: [
            new Score({
                id: 3,
                score: 123,
                player: new Participant({ id: 1, name: "Frederikke", nickname: "Bruden", scores: [] }),
                game: new Game({ id: 1, name: "Crocket", scores: [] }),
            }),
            new Score({
                id: 4,
                score: 101,
                player: new Participant({ id: 2, name: "Rúni", scores: [], }),
                game: new Game({ id: 1, name: "Crocket", scores: [] }),
            }),
            new Score({
                id: 5,
                score: 94,
                player: new Participant({ id: 2, name: "Christian", scores: [], }),
                game: new Game({ id: 1, name: "Crocket", scores: [] }),
            }),
            new Score({
                id: 6,
                score: 41,
                player: new Participant({ id: 2, name: "Mads", scores: [], }),
                game: new Game({ id: 1, name: "Crocket", scores: [] }),
            })
        ]
    }),
    new Game({
        id: 3,
        name: "Sømspil",
        scores: [
            new Score({
                id: 3,
                score: 123,
                player: new Participant({ id: 1, name: "Frederikke", nickname: "Bruden", scores: [] }),
                game: new Game({ id: 1, name: "Sømspil", scores: [] }),
            }),
            new Score({
                id: 4,
                score: 101,
                player: new Participant({ id: 2, name: "Rúni", scores: [], }),
                game: new Game({ id: 1, name: "Sømspil", scores: [] }),
            }),
            new Score({
                id: 5,
                score: 94,
                player: new Participant({ id: 2, name: "Christian", scores: [], }),
                game: new Game({ id: 1, name: "Sømspil", scores: [] }),
            }),
            new Score({
                id: 6,
                score: 41,
                player: new Participant({ id: 2, name: "Mads", scores: [], }),
                game: new Game({ id: 1, name: "Sømspil", scores: [] }),
            })
        ]
    }),
]

export default games;