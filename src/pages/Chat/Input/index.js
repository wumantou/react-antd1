import React from 'react'
import {Input} from 'antd';
import SocketCom from '../../../common/web-socket'
import { connect } from 'react-redux'
import { chatContent } from '../../../actions/chatContent'

const {TextArea} = Input;

class ChatInput extends React.Component {
    constructor(props) {
        super(props)
        console.log('======================================constructor state is :' + JSON.stringify(this.props.chatContent))
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
                console.log('this props chatContent!!!!!!!!!!!!!!!!!!!!!!!!!!!!' + this.props.chatContentToRedux)
                this.props.chatContentToRedux(message.data)
            }
        );
        console.log('5、父组件挂载完成');
    }
    componentWillMount() {
        if (this.socket !== undefined) {
            this.socket('close')
        }
        console.log('3、父组件挂载之前123');
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('6、父组件是否需要更新111');
        if (newState.number<15) return true;
        return true
    }

    componentWillUpdate() {
        console.log('7、父组件将要更新');
    }

    componentDidUpdate() {
        console.log('8、父组件更新完成111');
    }

    componentWillUnmount() {
        if (this.socket !== undefined) {
            this.socket('close')
        }
        console.log('14、子组件将卸载');
    }

    keyDownHandle = (e) => {
        if (e.keyCode === 13 && e.ctrlKey || e.keyCode === 13) {
            // console.log(e.target.value)
            let {message} = this.state
            if (message.charAt(message.length - 1) === '\n') {
                message = message.substring(0, message.length - 1)
            }
            if (message !== '') {
                this.socket('send', {message: message})
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

const Temp = connect(
    state => {
        console.log('======================================now message is :' + JSON.stringify(state))
        return state
    },
    dispatch => ({ chatContentToRedux: (message) => dispatch(chatContent(message))})
)(ChatInput)

export default () => (
    <Temp />
)
