import { Text, TextInput, View, Button,TouchableOpacity } from "react-native";
import {RecipesContext} from '../assets/Components/repContext.jsx';
import {useState, useContext} from 'react';
import {Picker} from '@react-native-picker/picker';

export default function Update() {
     const {recipesData, setRecipesData, recipeIndex, setRecipeIndex} = useContext(RecipesContext);

     const [name ,setName] = useState(recipesData[recipeIndex].Name)
     const [ingredients, setIngredients] = useState(recipesData[recipeIndex].Ingredients)
     const [steps, setSteps] = useState(recipesData[recipeIndex].Steps);
     const [image, setImage] = useState(recipesData[recipeIndex].Image)

     const changeRecipe = (value) => {
            const index = parseInt(value);
            setRecipeIndex(index);
//             setName(recipesData[index].name);
//             setIngredients(recipesData[index].ingredients);
//             setSteps(recipesData[index].steps);
//             setImage(recipesData[index].image);
         }

    return (
    <>
        <View
        style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
          >
          <Picker
          selectedValue={recipeIndex}
          onValueChange={(Index) => changeRecipe(Index)}>
          {recipesData.map((recipe, index) => (
              <Picker.Item label={recipe.Name} value={index} key={index}/>
              ))}
{/*               <Picker.Item label="Pesto Pasta" value={recipeIndex}/> */}
{/*               <Picker.Item label="Pizza" value="P"/> */}
{/*               <Picker.Item label="Chicken"value="c"/> */}
          </Picker>
            <Text>Name</Text>


        </View>
    </>
    )
    }