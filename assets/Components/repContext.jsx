import { createContext, useState } from 'react';
import recipesDataJson from "../recipes.json";

export const RecipesContext = createContext(null);

export function RecipesProvider({children}) {

    const [recipesData, setRecipesData] = useState(recipesDataJson);
    const [recipeIndex, setRecipeIndex] = useState(0);

    return (
        <>
        <RecipesContext.Provider value={{
            recipesData, setRecipesData, recipeIndex, setRecipeIndex}}>
            {children}
        </RecipesContext.Provider>
        </>
        )
    }