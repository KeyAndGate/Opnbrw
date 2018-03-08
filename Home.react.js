import React from 'react'
import { Text, View, Button, AsyncStorage as store} from 'react-native'
import styles from './Styles.react'


const HomeScreen = ( props ) => {
    store.getItem('recipes')
         .then(recipes => {
             if (!recipes) store.setItem('recipes', JSON.stringify({}))
         })
    const { navigate } = props.navigation
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Recipes"
                onPress={() => navigate('Recipes')}
            />
            <Button
                title="Go to NewRecipe"
                onPress={() => navigate('NewRecipe')}
            />
        </View>
    )
}

export default HomeScreen
