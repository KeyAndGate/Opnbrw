import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import NewRecipe from './NewRecipe.react'
import HomeScreen from './Home.react'

const RootStack = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    NewRecipe: {
        screen: NewRecipe
    }
})

export default class App extends React.Component {
    render() {
        return <RootStack />
    }
}
