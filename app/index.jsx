import { Text, View, Button,TouchableOpacity } from "react-native";
import {useState, useContext} from 'react';
import Recipes from "../assets/Components/recipes.jsx";
// import recipesData from "../assets/recipes.json";
import CustomButton from "../assets/Components/customButton.jsx"
import {RecipesContext} from '../assets/Components/repContext.jsx';

export default function Index() {
//     const [currentRecipe,setCurrentRecipe] = useState(0);
    const [currentItem, setCurrentItem] = useState("Pesto Pasta");
    const {recipesData, setRecipesData, recipeIndex, setRecipeIndex} = useContext(RecipesContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E8E8E8"
      }}
    >
        <View style={{
               flexDirection: "row",
               position: "absolute",
               top: 25
               }}>
            <CustomButton label="Pesto Pasta" onPress={() => {
//                 setCurrentRecipe(0)
                setRecipeIndex(0)
                setCurrentItem("Pesto Pasta")
                }} selected={currentItem}/>
            <CustomButton label="Chicken Parmesan" onPress={() => {
//                 setCurrentRecipe(1)
                setRecipeIndex(1)
                setCurrentItem("Chicken Parmesan")
                }} selected={currentItem}/>
            <CustomButton label="Margherita pizza" onPress={() => {
//                 setCurrentRecipe(2)
                setRecipeIndex(2)
                setCurrentItem("Margherita pizza")
                }} selected={currentItem}/>
         </View>

      <Recipes recipes={recipesData[recipeIndex]}/>
      <View style={{
          flexDirection: "row",
          position: "absolute",
          bottom: 50
          }}>
      </View>
    </View>
  );
}
