import React from 'react'
import { Text, View, Button, AsyncStorage as store} from 'react-native' //eslint-disable-line
import styles from './Styles.react'
import {Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox} from 'react-native-router-flux' //eslint-disable-line

class Batches extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      batches: {}
    }
  }

  async componentDidMount(){
    let batches = await store.getItem('batches')
    batches = JSON.parse(batches)
    if (batches) this.setState({ batches }) //eslint-disable-line
  }

  render(){
    const batches = this.state.batches
    const activeBatches = Object.keys(batches).filter(batch => batches[batch].active)
      console.log(Object.keys(batches))
    return (
      <View style={styles.container}>
      {
        activeBatches.map(batch => (
            <Button
              key={batch}
             title={batches[batch].name + ' ' + batch}
              onPress={() => console.log('hello')}
                  />
        ))
      }
      </View>
    )
  }
}

export default Batches
