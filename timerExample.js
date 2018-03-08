import { Notifications as Notify } from 'expo'

const note = {
    title: 'Test - Title',
    body: "this is a test schedule-notification, isn't that nice?"
}
let date = new Date()
let minutes = date.getMinutes()
date.setMinutes(minutes + 2)
Notify.scheduleLocalNotificationAsync(note, { time: date })
