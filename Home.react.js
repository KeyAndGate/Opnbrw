import React from 'react'
import { Text, View, Button } from 'react-native'
import styles from './Styles.react'


const HomeScreen = props => {
    const { navigate } = props.navigation
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Go to NewRecipe"
                onPress={() => navigate('NewRecipe')}
            />
        </View>
    )
}

export default HomeScreen
