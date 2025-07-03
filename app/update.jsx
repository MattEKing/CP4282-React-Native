import { Picker } from '@react-native-picker/picker';
import { useContext, useState } from 'react';
import { Text, TextInput, View } from "react-native";
import { RecipesContext } from '../assets/Components/repContext.jsx';

export default function Update() {
     const {recipesData, setRecipesData, recipeIndex, setRecipeIndex} = useContext(RecipesContext);

     const [name ,setName] = useState(recipesData[recipeIndex].Name)
     const [ingredients, setIngredients] = useState(recipesData[recipeIndex].Ingredients)
     const [steps, setSteps] = useState(recipesData[recipeIndex].Steps);
     const [image, setImage] = useState(recipesData[recipeIndex].Image)

     const changeRecipe = (value) => {
        // console.log(value)
            setRecipeIndex(value);
            console.log(recipeIndex)

         }

    return (
    <>
        <View
        style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
          >
            <View
                style={{
                    flexDirection: "row",
                }}
            >
                <Text
                    style={{marginTop: 16, marginRight: 5,fontSize: 20}}
                >Recipe:</Text>
                <Picker
                style={{width: 250, backgroundColor:"#BFBFBF"}}
                selectedValue={recipesData}
                onValueChange={(Index) => changeRecipe(Index)}>
                {recipesData.map((recipe, index) => (<Picker.Item label={recipe.Name} value={index} key={index}/>))}
                </Picker>
            </View>    
          
            <Text style={{fontSize: 20}}>Name</Text>
            <TextInput style={{width: 250, borderColor: "Black", borderStyle: "solid", borderWidth: 1}}
            value={name} onChangeText={setName}></TextInput>

            <Text style={{fontSize: 20}}>Ingredients</Text>
            <TextInput style={{width: 300, borderColor: "Black", borderStyle: "solid", borderWidth: 1}}
            value={ingredients.toString()} onChangeText={setIngredients}></TextInput>

            <Text style={{fontSize: 20}}>Steps</Text>
            <TextInput style={{width: 300, borderColor: "Black", borderStyle: "solid", borderWidth: 1}}
            value={steps.toString()} onChangeText={setSteps}></TextInput>

            <Text style={{fontSize: 20}}>Image</Text>

        </View>
    </>
    )
    }