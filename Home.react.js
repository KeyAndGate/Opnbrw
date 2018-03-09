import React from 'react'
import { Text, View, Button, AsyncStorage as store} from 'react-native'
import styles from './Styles.react'
import {
    Scene,
    Router,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
} from 'react-native-router-flux'


const HomeScreen = () => {
    store.getItem('recipes')
         .then(recipes => {
             if (!recipes) store.setItem('recipes', JSON.stringify({}))
         })
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Recipes"
                onPress={() => Actions.recipes()}
            />
            <Button
                title="Go to NewRecipe"
                onPress={() => Actions.newRecipe()}
            />
        </View>
    )
}

export default HomeScreen
