import {Text, View, Image} from 'react-native';

export default function Recipes({recipes}) {
    return (
        <>
        <Text style={{fontWeight: 'bold', fontSize: 40}}>{recipes.Name}</Text>
        <Image
        style={{width:300, height:300}}
        source={{uri: recipes.Image}}
        />
        <Text style={{fontWeight: 'bold', fontSize: 30}}>Ingredients:</Text>
        {
        recipes.Ingredients.map((ingredient) => <Text key={ingredient}>{ingredient}</Text>)
        }
        <Text style={{fontWeight: 'bold', fontSize: 30}}>Steps:</Text>
        {
        recipes.Steps.map((step) => <Text key={step}>{step}</Text>)
        }
        </>
        )
    }