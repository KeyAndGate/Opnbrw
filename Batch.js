import React from 'react'
import { Text, View, Button, AsyncStorage as store} from 'react-native' //eslint-disable-line
import styles from './Styles.react'
import {Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox} from 'react-native-router-flux' //eslint-disable-line
import { Notifications as Notify } from 'expo'

const msPerDay = 1000 * 60 * 60 * 24

const stepReminderSetter = async ( name, steps, begin ) => {
    let remindTime = await store.getItem('notification time')
    steps.forEach(step => {
        const task = step[0]
        const day = step[1] - 1
        const note = { title: `brewing: ${task}`,
                       body: `${name} needs you to ${task} today`}
        let time = new Date((day * msPerDay) + begin.valueOf())
        time.setHours = remindTime[0]
        time.setMinutes = remindTime[1]
        Notify.scheduleLocalNotificationAsync(note, {time})
    })
}

const recurringReminderSetter = async ( name, steps, begin ) => {
    let remindTime = await store.getItem('notification time')
    steps.forEach(step => {
        const task = step[0]
        const interval = step[1]
        const start = step[2] - 1
        const end = step[3] - 1
        const note = { title: `brewing: ${task}`,
                       body: `${name} needs you to ${task} today`}
        for (let day = start; day <= end; day += interval){
            let time = new Date((day * msPerDay) + begin.valueOf())
            time.setHours = remindTime[0]
            time.setMinutes = remindTime[1]
            Notify.scheduleLocalNotificationAsync(note, {time})
        }
    })
}


const Batch = props => {
    const batch = props.batch
    const {name, steps, recurringSteps, beginDate, id, notify} = batch
    let day = new Date()
    day = ( day.getTime() - beginDate ) / msPerDay
    day = day.floor + 1
    return (
        <View>
          <Text>batch number {id}: {name}</Text>
          <Text>day: {day}</Text>
          {
              !notify && <Button
                        title="set reminders"
                        onPress={() => {
                            stepReminderSetter(name, steps, beginDate)
                            recurringReminderSetter(name, recurringSteps, beginDate)
                            store.getItem('batches')
                                .then(batchesJSON => {
                                    let batches = JSON.parse(batchesJSON)
                                    batches = {...batches, id: {...batch, notify: true}}
                                    store.setItem('batches', JSON.stringify(batches))
                                })
                        }}
                        />
          }
        </View>
    )
}

export default Batch
