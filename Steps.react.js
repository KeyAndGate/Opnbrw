import React from 'react'
import { View, Text, Button, AsyncStorage as store } from 'react-native'
import styles from './Styles.react'

const Steps = props => {
  return (
    <View>
      <Text>Steps:</Text>
      {
        props.steps.map(step => (
          <Text key={step}>{step.name + ': day ' + step.date}</Text>
        ))
      }
    </View>
  )
}

export default Steps
