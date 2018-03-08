import React from 'react'
import { View, Text, Button, AsyncStorage as store } from 'react-native'
import styles from './Styles.react'

const step1 = {
    step: 'degas',
    from: 1,
    until: 12
}

const step2 = {
    step: 'secondary',
    on: 13
}
const step3 = {
    step: 'coldCrash',
    on: 14
}
const step4 = {
    step: 'bottle',
    on: 18
}

const SpecialRecipe = {
    name: 'THE GOOD STUFF',
    startingIngredients: [['Honey', '1 lb'], ['Blackberries', '1 cup']],
    process: [step1, step2, step3, step4]
}

const pressHandler = (evt) => {
    store.setItem('recipes', JSON.stringify([SpecialRecipe]))
    /* .then(evt.target.title = 'added')*/
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
        </View>
    )
}

export default NewRecipe
