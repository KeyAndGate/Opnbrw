import React from 'react'
import { View, Text, AsyncStorage as store } from 'react-native'
import styles from './Styles.react'

/* let recipe = await store.getItem('MySpecial')*/

class Recipe extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            recipes: ''
        }
    }


    async componentDidMount(){
        let recipes = await store.getItem('recipes')
        this.setState({ recipes })
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>
                    Hello, this is a page to display a list of recipes
                </Text>
            </View>
        )
    }
}
/* {
 *     recipes.map(recipe => (
 *         <Text>
 *         {recipe.name}
 *         </Text>
 *     ))
 * }*/

export default Recipe
