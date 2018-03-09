import React from 'react'
import { View, Text, Button, AsyncStorage as store } from 'react-native'
import styles from './Styles.react'

const Recipe = props => {
    const name = props.recipe
    const start = props.data.startingIngredients
    return (
        <View style={styles.container}>
        <Text>{name}</Text>
            {
                Object.keys(start).map(ingredient => (
                    <View key={`start${ingredient}`}>
                        <Text>{ingredient + ' ' + start[ingredient]}</Text>
                    </View>
                ))
            }
        </View>
    )
}


export default Recipe
