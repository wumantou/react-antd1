import React from 'react';
import Websocket from 'react-websocket';

class SocketDetail extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count: 90
    //     };
    // }

    handleData(data) {
        let result = JSON.parse(data);
        console.log(result)
        // this.setState({count: this.state.count + result.movement});
    }

    onOpen() {
        console.log('open success')
    }

    render() {
        return (
            <div>
                Count: <strong>100</strong>

                <Websocket url='ws://localhost:8080/endpointChat'
                           onMessage={this.handleData.bind(this)}
                           onOpen={this.onOpen.bind(this)}
                           debug={true}/>

            </div>
        );
    }
}

export default SocketDetail;