import express, { Application, Request, Response ,json} from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import * as dotenv from 'dotenv'
import routes from './routes'

dotenv.config()

const PORT = process.env.PORT || 3000
// create an instance server
const app: Application = express()
// HTTP request logger middleware
app.use(morgan('short'))

// add routing for / path
app.use('/api', routes);

// Middlewares
app.use(
  cors(),
  helmet(),
  json(),
  morgan('dev')

)

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`)
})

export default app