const express = require('express')
const morgan = require('morgan')

const cors = require('cors')

const app = express()


app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))


const walletRoute = require('./route/wallet')
app.use('/', walletRoute)





const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log("App running on PORT", port)
})