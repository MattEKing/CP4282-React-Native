import {Text, View, Image} from 'react-native';

export default function Recipes({recipes}) {
    return (
        <>
        <Text>{recipes.name}</Text>
{/*         <Image source={{uri = recipes.Image}}/> */}
        <Text>Ingredients:</Text>
        {
        recipes.ingredients.map((ingredient) => <Text key={ingredient}>{ingredient}</Text>)
        }
        <Text>Steps:</Text>
        {
        recipes.steps.map((step) => <Text key={step}>{step}</Text>)
        }
        </>
        )
    }