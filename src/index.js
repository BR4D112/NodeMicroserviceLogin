import { json } from 'express'
import app from './App.js'
import { sequalize } from './database/db.js'
import cors from 'cors';
import './models/Login.js'
import './EurekaClient.js'
const PORT = 3000
app.use(json())
app.use(cors())
async function main() {
    try {
        await sequalize.sync({ force: false });
        app.listen(PORT)
        console.log(`server is listening on port http://localhost:${PORT}`);
    } catch (error) {
        console.log(error);
    }
}
main()
app.get('/', (req, res) => {
    console.log(req.body);
    console.log(req.headers["host"]);
    const { message } = req.body;
    console.log(`este es el mensaje que obtuvimos ${message}`);
    res.send(`hola mundo estas en el puerto ${PORT}`)
})

