import https from "https"
import fs from "fs"
import app from "./app.mjs"

// Set port
const PORT = 5001
const server = https.createServer({
    key: fs.readFileSync('keys/privatekey.pem'),
    cert: fs.readFileSync('keys/cert.pem')
}.app)

app.listen(PORT)