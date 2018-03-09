import React from 'react'
import { View, Text, AsyncStorage as store, Button } from 'react-native'
import styles from './Styles.react'

/* let recipe = await store.getItem('MySpecial')*/

class Recipe extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            recipes: {}
        }
        this.deleteHandler = this.deleteHandler.bind(this)
    }


    async componentDidMount(){
        let recipes = await store.getItem('recipes')
        recipes = JSON.parse(recipes)
        if (recipes) this.setState({ recipes })
    }

    deleteHandler(){
        store.setItem('recipes', JSON.stringify({}))
        .then(this.setState({recipes: {}}))
    }

    render(){
        const recipes = Object.keys( this.state.recipes )
        return (
            <View style={styles.container}>
                <Text>
                    Hello, this is a page to display a list of recipes
                </Text>
            <Button
            title="Delete"
            onPress={this.deleteHandler}
            />
            {
                recipes.map(recipe => (
                    <Button
                    key={ `${recipe}` }
                    title={ `${recipe}` }
                    onPress={() => console.log(`${recipe}`)}
                    />
                ))
            }
            <Button
            title={'new recipe'}
            color='green'
            onPress={() => console.log('new recipe button')}
            />
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
