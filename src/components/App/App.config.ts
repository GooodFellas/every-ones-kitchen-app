import RecipeList from "../RecipeList/RecipeList";
import HomePage from "../HomePage/HomePage";
import Recipe from "../Recipe/Recipe";


export const config = {
    routes: [
        {route: '/', exact: true, component: HomePage},
        {route: '/search', exact: true, component: RecipeList},
        {route: '/recipe/:recipeId', exact: true, component: Recipe}
    ]
}