const db = require('../../data/db-config')
module.exports = {
    findById,
}

// TEST : http :9000/api/recipes/1
async function findById(id){
    // step 1
    // return Promise.resolve("GET recipe by id")
    // step 2
    // return db('recipes')
    // step 3
        /**
    SELECT  
          r.recipe_id, r.recipe_name, r.created_at
          ,s.step_id, s.step_number, s.step_instructions
          ,i.ingredient_id, i.ingredient_name, quantity
      FROM recipes as r
      INNER JOIN steps as s
          ON r.recipe_id = s.recipe_id
      INNER JOIN ingredients as i
      INNER JOIN steps_ingredients as si
          ON si.step_id = s.step_id
      WHERE r.recipe_id = 1

    SELECT  
          r.recipe_id, r.recipe_name, r.created_at
          ,s.step_id, s.step_number, s.step_instructions
          ,i.ingredient_id, i.ingredient_name, quantity
      FROM recipes as r
       JOIN steps as s
          ON r.recipe_id = s.recipe_id
       JOIN ingredients as i
       JOIN steps_ingredients as si
          ON si.step_id = s.step_id
      WHERE r.recipe_id = 1
     */
    // step 4
      const rows = await db('recipes as r')
      .join('steps as s', 'r.recipe_id', 's.recipe_id')
      .innerJoin('ingredients as i')
      .innerJoin('steps_ingredients as si', 'si.step_id ', 's.step_id')
      .select('r.recipe_id', 'r.recipe_name', 'r.created_at'
             ,'s.step_id', 's.step_number', 's.step_instructions'
             ,'i.ingredient_id', 'i.ingredient_name', 'quantity')
      .where('r.recipe_id', id)
    //   return rows
    // step 5
    const recipe = { steps:[] }
    // step 6
    // rows.map( item =>{
    //     recipe.recipe_name = item.recipe_name
    //     recipe.recipe_id = item.recipe_id
    //     recipe.created_at = item.created_at
    // })
    // step 7
    // rows.map( item =>{
    //     recipe.recipe_name = item.recipe_name
    //     recipe.recipe_id = item.recipe_id
    //     recipe.created_at = item.created_at
    //     recipe.steps.push({
    //         step_number: item.step_number,
    //         step_instructions: item.step_instructions,
    //         step_id: item.step_id,
    //         ingredients: [{}]
    //     })
    // })
    // step 8
    rows.map( item =>{
        recipe.recipe_name = item.recipe_name
        recipe.recipe_id = item.recipe_id
        recipe.created_at = item.created_at
        recipe.steps.push({
            step_number: item.step_number,
            step_instructions: item.step_instructions,
            step_id: item.step_id,
            ingredients: [{
                ingredient_name: item.ingredient_name,
                ingredient_id: item.ingredient_id,
                quantity: item.quantity
            }]
        })
    }) 

    return recipe
}