import React from 'react'
/* import { StyleSheet, Text, View } from 'react-native'*/
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

import Recipes from './Recipes.react'
import NewRecipe from './NewRecipe.react'
import HomeScreen from './Home.react'

const App = () => {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="home" component={HomeScreen} title="Home" />
                    <Scene key="recipes" component={Recipes} title="Recipes" />
                    <Scene key="newRecipe" component={NewRecipe} title="New Recipe" />
                </Stack>
            </Router>
        )
}

export default App
