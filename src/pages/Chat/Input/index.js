import React from 'react'
import {Input} from 'antd';
import SocketCom from '../../../common/web-socket'

const {TextArea} = Input;

export default class ChatInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: ''
        }
    }

    componentDidMount = async () => {
        this.socket = await SocketCom(
            'http://localhost:8080/endpointChat',
            '/topic/getResponse',
            '/welcome',
            (message) => {
                console.log('back message!!!!!!!!!!!!!!!!!!!!!!!!!!!!' + message.data)
            }
        );
    }

    keyDownHandle = (e) => {
        if (e.keyCode === 13 && e.ctrlKey || e.keyCode === 13) {
            // console.log(e.target.value)
            let {message} = this.state
            if (message.charAt(message.length - 1) === '\n') {
                message = message.substring(0, message.length - 1)
            }
            if (message !== '') {
                this.socket({message: message})
            }
            this.setState({
                message: ''
            })
        }
    }

    onChange = (e) => {
        if (e.target.value.charAt(e.target.value.length - 1) !== '\n') {
            this.setState({
                message: e.target.value
            })
        }
    }

    render() {
        let {message} = this.state
        return (
            <TextArea rows={4} value={message} onChange={this.onChange} onKeyDown={this.keyDownHandle}/>
        )
    }
}
