import express, { Request, Response } from 'express';

const app = express();

app.get('/:name', (req: Request, res: Response) => {
    const name = req.params.name
    res.send(`Hello ${name}`)
})

app.listen(3000, () => console.log("it's working"))