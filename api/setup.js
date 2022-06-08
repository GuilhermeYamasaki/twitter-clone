import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import { router } from './routes.js'

export const app = new Koa()

// const cors = () => {
//     return function (ctx, next) => {
//         next()
//     }
// }

app.use(cors())
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())