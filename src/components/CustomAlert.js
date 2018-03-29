import { Component } from 'react'
import Alert from 'react-s-alert'

import {alertOptions} from '../Constants'

export default class CustomAlert extends Component {
    static success(message) {
        Alert.success(message, alertOptions)
    }

    static error(message){
        Alert.error(message, alertOptions)
    }
}