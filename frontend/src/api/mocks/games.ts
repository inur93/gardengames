import type { Game } from "../models";

const games: Game[] = [
    {
        id: "1",
        name: "Stangtennis",
        scores: [
            {
                name: "Frederikke",
                score: 123
            },
            {
                name: "Rúni",
                score: 12
            }
        ]
    },
    {
        id: "2",
        name: "Dåsekast",
        scores: [
            {
                name: "Frederikke",
                score: 12
            },
            {
                name: "Christian",
                score: 12
            },
            {
                name: "Mads",
                score: 10
            },
            {
                name: "Rúni",
                score: 2
            }
        ]
    },
    {
        id: "3",
        name: "Crocket",
        scores: [
            {
                name: "Frederikke",
                score: 12
            },
            {
                name: "Christian",
                score: 12
            },
            {
                name: "Mads",
                score: 10
            },
            {
                name: "Rúni",
                score: 2
            }
        ]
    },
    {
        id: "4",
        name: "Sømspil",
        scores: [
            {
                name: "Frederikke",
                score: 12
            },
            {
                name: "Christian",
                score: 12
            },
            {
                name: "Mads",
                score: 10
            }
        ]
    }
]

export default games;