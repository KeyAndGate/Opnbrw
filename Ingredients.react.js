import React from 'react'
import { View, Text, Button, AsyncStorage as store } from 'react-native'
import styles from './Styles.react'

const Ingredients = props => {
  return (
    <View>
      <Text>{props.type}</Text>
      {
        Object.keys(props.ing).map(ingredient => (
        <Text key={ingredient}>{ingredient + ' ' + props.ing[ingredient]}</Text>
        ))
      }
    </View>
  )
}

export default Ingredients
