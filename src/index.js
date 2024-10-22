import { json } from 'express'
import app from './App.js'
import { sequalize } from './database/db.js'
import './models/Login.js'
import { closeClient, turnOnClient } from "./EurekaClient.js";

const PORT = process.env.PORT

app.use(json());

async function main() {
    try {
        await sequalize.sync({ force: true });
        app.listen(PORT)
        console.log(`server is listening on port http://localhost:${PORT}`);
    } catch (error) {
        console.log(error);
    }
}

(async ()=>{
    const ex = await import('./EurekaClient.js')
    main()
})();

app.get('/', (req, res) => {
    console.log(req.body);
    console.log(req.headers["host"]);
    const { message } = req.body;
    console.log(`este es el mensaje que obtuvimos ${message}`);
    res.send(`Servidor funcionando en el puerto ${PORT}`)
})

app.get('/close', (req, res) => {
    closeClient();
})

app.get('/start', (req, res) => {
    turnOnClient();
})
