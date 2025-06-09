import { Text, View } from "react-native";;
import Recipes from "../assets/Components/recipes.jsx";
import recipesData from "../assets/recipes.json";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Top 3 Recipes</Text>
      <Recipes recipes={recipesData[0]}/>
    </View>
  );
}
