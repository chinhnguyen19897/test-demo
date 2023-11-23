import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();


server.use(middleware)

server.get('/echo', (req, res) => {
    res.jsonp(req.query)
})

router.render = (req, res) => {
    const headers = res.getHeaders()
    if (req.originalMethod === 'GET') {
        const result = {
            data: res.locals.data
        }
        return res.jsonp(result)
    }
    res.jsonp(result)
}

server.use('/api/v1', router)
server.listen(5001, () => {
    console.log('JSON Server is running')
})
