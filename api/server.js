const express = require('express')
const recipesRouter = require('./recipes/recipes-router')
const server = express()

server.use(express.json())

server.use('/api/recipes', recipesRouter)

// TEST :  http :9000/
server.use('*', (req, res)=>{
    res.status(404).json({
        message: 'up'
    })
})
server.use((err, req, res, next)=>{ //eslint-disable-line
    res.status(err.message|| 500).json({
        message: err.message,
        stack: err.stack
    })
})
module.exports = server
