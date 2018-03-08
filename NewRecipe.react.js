import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './Styles.react'

const NewRecipe = props => {
    const { navigate } = props.navigation
    return (
        <View style={styles.container}>
            <Text>
                Hello, this is a page to input new recipies.
            </Text>
            <Button
                title="Go Home"
                onPress={() => navigate('Home')}
            />
        </View>
    )
}

export default NewRecipe
