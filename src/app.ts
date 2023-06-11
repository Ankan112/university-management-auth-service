import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from '../src/app/modules/users/user.route'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application route
app.use('/api/v1/users/', usersRouter)

//testing
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
