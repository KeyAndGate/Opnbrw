import React from 'react'
import { Text, View, Button, AsyncStorage as store} from 'react-native'
import styles from './Styles.react'
import {Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox,} from 'react-native-router-flux' //eslint-disable-line


const HomeScreen = () => {
  store.getItem('recipes')
       .then(recipes => {
         if (!recipes) store.setItem('recipes', JSON.stringify({}))
       })
  store.getItem('batchCount')
         .then(count => {
           if (!count) {
             store.setItem('batchCount', JSON.stringify(0))
             store.setItem('batches', JSON.stringify({}))
           }
         })
    store.getItem('notification time')
        .then(time => {
            if (!time) {
                store.setItem('notification time',
                              JSON.stringify({hour: 11, minute: 0}))
            }
        })
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Recipes"
                onPress={() => Actions.recipes()}
            />
              <Button
                title="Go to Batches"
                onPress={() => Actions.batches()}
                />
        </View>
    )
}

export default HomeScreen
