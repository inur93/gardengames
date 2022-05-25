import { createServer } from "miragejs"
import games from "./mocks/games"

createServer({
    routes() {
        this.urlPrefix = "http://localhost:1234"
        this.namespace = "api"

        this.get("/games", () => {
            return games
        })

        // this.passthrough("http://localhost:3000/**")
        // this.passthrough("data:image/**")
        // this.passthrough(request => {
        //     return !request.url.includes('/api')
        // });
        this.pretender.get('data:image/*', this.pretender.passthrough);
        this.passthrough();
    },
})
