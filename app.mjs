const urlprefix = '/api'
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.end("APIs make me cry! Listening on https://localhost:" + PORT)
})

app.get('/test', (req, res) => {
    res.end("Testing the /test endpoint")
})

app.get(urlprefix + '/orders', (req, res) => {
    const orders = [
        {
            id: "1",
            name: "orange"
        },
        {
            id: "2",
            name: "apple"
        },
        {
            id: "3",
            name: "Pear"
        }
    ]
    res.json(
        {
            message: "Fruits",
            orders: orders
        }
    )
})