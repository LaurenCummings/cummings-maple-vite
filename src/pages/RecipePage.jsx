import '../css/RecipePage.css';
import recipes from '../Recipes.js';

function RecipePage() {
    return (
        <div className="recipe-page">
            <h1>Recipes</h1>
            <h3>Here are some of our favorite maple recipes</h3>
            {
                recipes.map((recipe) => {
                    return (
                        <div key={recipe.id} className="recipe">
                            <h2>{recipe.name}</h2>
                            <h3>Ingredients</h3>
                            {
                                recipe.ingredients.map((ingredient, index) => {
                                    return (<li key={index}>{ingredient}</li>)
                                })
                            }
                            {
                                recipe.instructions.map((instruction, index) => {
                                    return (<p key={index}>{instruction}</p>)
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RecipePage;