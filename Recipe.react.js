import React from 'react'
import { View, Text, Button, AsyncStorage as store } from 'react-native'
import styles from './Styles.react'

const Recipe = props => {
    const name = props.recipe
    const hon = props.data.startingIngredients[0][0]
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <Text>{hon}</Text>
        </View>
    )
}


export default Recipe
