const router = require('express').Router()
const mw = require('./recipes-middleware')

// TEST :  http :9000/api/recipes/id
router.get('/:recipe_id', mw.checkRecipesId, async (req, res, next)=>{
    try{
        // throw new Error('ARRRR')
        res.json(req.recipe)
    }catch(err){
        next(err)
    }
})

module.exports = router