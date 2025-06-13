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
        recipes.Ingredients.map((ingredient ,index) => <Text key={ingredient}>{index + 1}. {ingredient}</Text>)
        }
        <Text style={{fontWeight: 'bold', fontSize: 30}}>Steps:</Text>
        {
        recipes.Steps.map((step, index) => <Text key={step}>{index + 1}. {step}</Text>)
        }
        </>
        )
    }