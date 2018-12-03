import React from 'react'
import {Button} from "antd";
import SocketCom from '../../common/web-socket'

class SockJsDetail extends React.Component {
    handleSubmit = async () => {
        const sendFun = await SocketCom(
            'http://localhost:8080/endpointChat',
            '/topic/getResponse',
            '/welcome',
            (message) => {
                console.log('back message!!!!!!!!!!!!!!!!!!!!!!!!!!!!' + message.data)
            }
        );
        sendFun({'message': "i am test!!!!"});
    }

    render() {
        return (
            <div>
                <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleSubmit}>
                    connect socket
                </Button>
            </div>
        );
    }
}

export default SockJsDetail
