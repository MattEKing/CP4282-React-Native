import { Picker } from '@react-native-picker/picker';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import { useContext, useState } from 'react';
import { Image, Text, TextInput, View } from "react-native";
import CustomButton from "../assets/Components/customButton.jsx";
import { RecipesContext } from '../assets/Components/repContext.jsx';

export default function Update() {
     const {recipesData, setRecipesData, recipeIndex, setRecipeIndex} = useContext(RecipesContext);

     const [name ,setName] = useState(recipesData[recipeIndex].Name)
     const [ingredients, setIngredients] = useState(recipesData[recipeIndex].Ingredients)
     const [steps, setSteps] = useState(recipesData[recipeIndex].Steps);
     const [image, setImage] = useState(recipesData[recipeIndex].Image)

     const changeRecipe = (value) => {
            setName(recipesData[value].Name);
            setIngredients(recipesData[value].Ingredients);
            setSteps(recipesData[value].Steps);
            setImage(recipesData[value].Image);
            setRecipeIndex(value);
            console.log(recipeIndex)

         }
    
    const changeIngredents= (value) => {
        const updatedArray = value.split(",");
        setIngredients(updatedArray);
    }

    const changeSteps = (value) => {
        const updatedArray = value.split(",");
        setSteps(updatedArray)
    }

    const updateRecipe = () => {

        const recipe = {
            Name: name,
            Ingredients: ingredients,
            Steps: steps,
            Image: image
        }

        recipesData[recipeIndex] = recipe
        setRecipesData(recipesData);
    }

    const pickImage = async () => {

    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access media library is required!');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      quality: 1,
    });
    if (!result.canceled && result.assets.length > 0) {
      const asset = result.assets[0];
      const uri = asset.uri;
      console.log(uri)
      const base64Data = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      setImage("data:image/jpeg;base64," + base64Data);
    }
  };

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
                style={{width: 230, backgroundColor:"#BFBFBF"}}
                selectedValue={recipesData}
                onValueChange={(Index) => changeRecipe(Index)}>
                {recipesData.map((recipe, index) => (<Picker.Item label={recipe.Name} value={index} key={index}/>))}
                </Picker>
            </View>    
          
            <Text style={{fontSize: 20}}>Name</Text>
            <TextInput style={{width: 300, borderColor: "Black", borderStyle: "solid", borderWidth: 1}}
            value={name} onChangeText={setName}></TextInput>

            <Text style={{fontSize: 20}}>Ingredients</Text>
            <TextInput multiline={true} style={{width: 300, borderColor: "Black", borderStyle: "solid", borderWidth: 1}}
            value={ingredients.toString()} onChangeText={changeIngredents}></TextInput>

            <Text style={{fontSize: 20}}>Steps</Text>
            <TextInput multiline={true} style={{width: 300, borderColor: "Black", borderStyle: "solid", borderWidth: 1}}
            value={steps.toString()} onChangeText={changeSteps}></TextInput>

            <Text style={{fontSize: 20}}>Image</Text>
            <View>
                <Image
                        style={{width:250, height:250, borderColor: "Black", borderStyle: "solid", borderWidth: 1}}
                        source={{uri: image}}
                        />
                <CustomButton label={"Change Image"} onPress={pickImage} />
            </View>
            
            <View style={{width:300, marginTop: 20}}>
                <CustomButton label={"Update"} onPress={() => {updateRecipe()}}/>
            </View>
        </View>
    </>
    )
    }