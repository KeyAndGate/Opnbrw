import React from 'react'
import { View, Text, Button, AsyncStorage as store } from 'react-native'
import styles from './Styles.react'
import Ingredients from './Ingredients.react'
import Steps from './Steps.react'
import RecurringSteps from './RecurringSteps.react'

const pressHandler = (name, start, additions, steps, recurringSteps) => {
    const batch = {name, start, additions, steps, recurringSteps}
    const out = {}
    store.getItem('batchCount')
        .then(countJSON => {
            let count = JSON.parse(countJSON)
            console.log(count)
            out[count] = {...batch, active: true}
            store.mergeItem('batches', JSON.stringify( out ))
                .then(() => {
                    count = count + 1
                    store.setItem('batchCount', JSON.stringify( count ))
                })
        })
}

const Recipe = props => {
  const name = props.recipe
  const data = props.data
  const start = data.startingIngredients
  const additions = data.additions
  const steps = data.steps
  const recurringSteps = data.recurringSteps

  return (
    <View style={styles.container}>
      <Button
        title="start a batch"
        onPress={() => pressHandler(name, start, additions, steps, recurringSteps)}
        />
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
