import React from 'react'
/* import { StyleSheet, Text, View } from 'react-native'*/
import {Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox,} from 'react-native-router-flux' //eslint-disable-line

import Recipes from './Recipes.react'
import Recipe from './Recipe.react'
import NewRecipe from './NewRecipe'
import HomeScreen from './Home.react'
import Batches from './Batches'

const App = () => {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="home" component={HomeScreen} title="Home" />
                    <Scene key="recipes" component={Recipes} title="Recipes" />
                    <Scene key="newRecipe" component={NewRecipe} title="New Recipe" />
                    <Scene key="recipe" component={Recipe} title="Recipe" />
                    <Scene key="batches" component={Batches} title="Batches" />
                </Stack>
            </Router>
        )
}

export default App
