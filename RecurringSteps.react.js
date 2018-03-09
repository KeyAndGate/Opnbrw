import React from 'react'
import { View, Text, Button, AsyncStorage as store } from 'react-native'
import styles from './Styles.react'

const RecurringSteps = props => {
  return (
    <View>
      <Text>Recurring Steps:</Text>
      {
        props.recurringSteps.map(step => (
          <Text key={step}>
            {step.name + ' every ' +
             step.interval + ' day(s) from day '
             + step.start + ' until day ' + step.end
            }
          </Text>
        ))
      }
    </View>
  )
}

export default RecurringSteps
