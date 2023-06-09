import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/modules/users/middlewares/globalErrorHandler'
import { UserRouters } from './app/modules/users/user.route'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application route
console.log(app.get('env'))
app.use('/api/v1/users/', UserRouters)

//testing
// app.get('/', (req: Request, res: Response) => {
//   // next('Ore baba error hoiche ki korbo')
//   // res.send('Hello World!')
//   // Promise.reject(new Error('Unhandled promise rejection'))
//   // console.log(x)
// })

// global error handler
app.use(globalErrorHandler)

export default app
