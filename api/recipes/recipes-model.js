const db = require('../../data/db-config')
module.exports = {
    findById,
}

async function findById(id){
    // return db('recipes')
    // return Promise.resolve('awesome !!! send recipe by id')

    return db('recipes as r').where("recipe_id", id)
}