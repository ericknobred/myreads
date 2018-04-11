import Alert from 'react-s-alert'
import {alertOptions} from '../Constants'

export default function CustomAlert () {
    return { 
        success: function(message) {
            Alert.success(message, alertOptions)
        },
        error: function(message){
            Alert.error(message, alertOptions)
        }
    }
}