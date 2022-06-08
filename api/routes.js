import Router from '@koa/router'

export const router = new Router()

const tweets = []

router.get('/tweets', ctx => { //pega a lista
    ctx.body = ctx.query ? tweets.filter(tweet => tweet.username === ctx, query.username) : tweets
})

router.post('/tweets', ctx => { //recebe informações
    const tweets = {
        ...ctx.request.body, id: tweets.length + 1
    }

    tweets.push(tweet) //salva as informações no array
    ctx.body = tweet
})