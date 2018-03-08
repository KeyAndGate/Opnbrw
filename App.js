import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Notifications as Notify } from 'expo'

export default class App extends React.Component {
  render() {
      const note = {
          title: 'Test - Title',
          body: "this is a test schedule-notification, isn't that nice?"
      }
      let date = new Date()
      let minutes = date.getMinutes()
      date.setMinutes(minutes + 2)
      Notify.scheduleLocalNotificationAsync(note, { time: date })
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
