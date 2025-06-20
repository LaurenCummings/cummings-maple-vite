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
                        <div>
                            <h2>{recipe.name}</h2>
                            <p>{recipe.ingredients}</p>
                            <p>{recipe.instructions}</p>                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RecipePage;