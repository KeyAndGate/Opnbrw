import React from 'react'
import { View, Text, Button, TextInput, AsyncStorage as store } from 'react-native'
import styles from './Styles.react'


const step1 = {
  name: 'secondary',
  date: 13
}
const step2 = {
  name: 'coldCrash',
  date: 14
}
const step3 = {
  name: 'bottle',
  date: 18
}
const startingIngredients = {
  Honey: '1 lb',
  Blackberries: '1 cup'
}

const SpecialRecipe = {
  'The Good Stuff': {
    startingIngredients,
    steps: [step1, step2, step3],
    recurringSteps: [{ name: 'degas', interval: 1, start: 2, end: 8 }]
  }
}

const OtherRecipe = {
  'The Other Stuff': {
    startingIngredients,
    steps: [step1, step2, step3],
    additions: {Moarhoney: '2 lbs'}
  }
}

const otherpressHandler = () => {
  let JSONED = JSON.stringify(SpecialRecipe)
  store.mergeItem('recipes', JSONED)
}

class NewRecipe extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'enter name here',
      start: 'starting ingredients: format as [ingredient] - [amount], ...',
      additions: 'optional: additional ingredients: format as [ingredient] - [amount], ...',
      steps: 'format as [step] - [day], ... where step is a name, and day is a number',
      recurringSteps: 'format as [step] - [interval] - [starting date] - [ending date], ... where inteval is the number of days between repetitions'
    }
  }

  parseIng = (ingredients) => {
    const arr = ingredients.split(',')
    const out = {}
    arr.forEach(line => {
      const ingredientAndAmt = line.split(' - ')
      const ingredient = ingredientAndAmt[0].trim()
      const amt = ingredientAndAmt[1].trim()
      out[ingredient] = amt
    })
    return out
  }

  parseSteps = (steps) => {
    const arr = steps.split(',')
    const out = []
    arr.forEach(line => {
      const stepAndDate = line.split(' - ')
      const name = stepAndDate[0].trim()
      const date = stepAndDate[1].trim()
      const pair = {name, date}
      out.push(pair)
    })
    return out
  }

  pressHandler = () => {
    const recipe = {}
    const startingIngredients = this.parseIng(this.state.start)
    const steps = this.parseSteps(this.state.steps)
    recipe[this.state.name] = {
      startingIngredients,
      steps
    }
    store.mergeItem('recipes', JSON.stringify(recipe))
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>
          Hello, this is a page to input new recipies
        </Text>
        <TextInput
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <TextInput
          onChangeText={(start) => this.setState({start})}
        value={this.state.start}
        />
        <TextInput
          onChangeText={(additions) => this.setState({additions})}
        value={this.state.additions}
        />
        <TextInput
          onChangeText={(steps) => this.setState({steps})}
          value={this.state.steps}
        />
        <TextInput
          onChangeText={(recurringSteps) => this.setState({recurringSteps})}
          value={this.state.recurringSteps}
        />
        <Button
          title="Submit"
          onPress={this.pressHandler}
        />
      </View>
    )
  }
}

export default NewRecipe
