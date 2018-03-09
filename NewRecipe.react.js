import React from 'react'
import { View, Text, Button, AsyncStorage as store } from 'react-native'
import styles from './Styles.react'


const step1 = {
    name: 'secondary',
    date: 13
}
const step2 = {
    name: 'coldCrash',
    date: 14
}
const step3 = {
    name: 'bottle',
    date: 18
}
const startingIngredients = {
    Honey: '1 lb',
    Blackberries: '1 cup'
}

const SpecialRecipe = {
    'The Good Stuff': {
        startingIngredients,
        steps: [step1, step2, step3],
        recurringSteps: [{ name: 'degas', interval: 1, start: 2, end: 8 }]
    }
}

const OtherRecipe = {
    'The Other Stuff': {
      startingIngredients,
      steps: [step1, step2, step3],
      additions: {Moarhoney: '2 lbs'}
    }
}

const pressHandler = () => {
    let JSONED = JSON.stringify(SpecialRecipe)
    store.mergeItem('recipes', JSONED)
}

const otherHandler = () => {
    let JSONED = JSON.stringify(OtherRecipe)
    store.mergeItem('recipes', JSONED)
}

const NewRecipe = props => {
    return (
        <View style={styles.container}>
            <Text>
                Hello, this is a page to input new recipies.
            </Text>
            <Button
                title="add the good stuff"
                onPress={pressHandler}
            />
        <Button
        title="add the other stuff"
        onPress={otherHandler}
        />
        </View>
    )
}

export default NewRecipe
