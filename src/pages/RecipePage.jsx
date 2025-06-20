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
                        <div key={recipe.id}>
                            <h2>{recipe.name}</h2>
                            {
                                recipe.ingredients.map((ingredient, index) => {
                                    return (<li key={index}>{ingredient}</li>)
                                })
                            }
                            <p>{recipe.instructions}</p>                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RecipePage;