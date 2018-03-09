import React from 'react'
import { View, Text, Button, AsyncStorage as store } from 'react-native'
import styles from './Styles.react'
import Ingredients from './Ingredients.react'
import Steps from './Steps.react'
import RecurringSteps from './RecurringSteps.react'

const Recipe = props => {
  const name = props.recipe
  const data = props.data
  const start = data.startingIngredients
  const additions = data.additions
  const steps = data.steps
  const recurringSteps = data.recurringSteps

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Ingredients type="Ingredients" ing={start} />
      {
         additions && <Ingredients type="Additions" ing={additions} />
      }
      <Steps steps={steps} />
	{
      recurringSteps && <RecurringSteps recurringSteps={recurringSteps} />
	}
    </View>
  )
}

export default Recipe
