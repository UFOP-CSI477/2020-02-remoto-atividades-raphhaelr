import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import routes from './routes'
import cors from 'cors'

const app = express()

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(routes)

app.use((error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error) {
        return response.status(400).json({ message: error.message })
    }
})

app.listen(3333, () => console.log('Server started on PORT 3333.'))