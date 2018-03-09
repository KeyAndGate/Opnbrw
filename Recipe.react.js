import React from 'react'
import { View, Text, Button, AsyncStorage as store } from 'react-native'
import styles from './Styles.react'
import Ingredients from './Ingredients.react'

const Recipe = props => {
  const name = props.recipe
  const data = props.data
  const start = data.startingIngredients
  const additions = data.additions

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Ingredients type="Ingredients" ing={start} />
      {
         additions && <Ingredients type="Additions" ing={additions} />
      }
    </View>
  )
}

export default Recipe
