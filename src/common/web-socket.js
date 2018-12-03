import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

const socketFun = function (endpointUrl, subscribeUrl, sendUrl, messageCallback) {

    const sockjs = new SockJS(endpointUrl);
    // console.log(sockjs)
    const client = Stomp.over(sockjs);
    // console.log(client)

    client.connect({}, function (frame) {
            // console.log('Connected===============================' + frame);
            //接收controller传回来的数据并解析
            client.subscribe(subscribeUrl, function (chatting) {
                //chatting是controller对应的处理函数的方法
                //content是后台传回来的Message对象的属性
                const message = JSON.parse(chatting.body);
                // console.log('back message!!!!!!!!!!!!!!!!!!!!!!!!!!!!' + message.data)
                console.log('subscribe client' + client)
                messageCallback(message)
            });
            // client.send(sendUrl, {}, JSON.stringify({
            //     'message': "i am test!!!!"
            // }));
        },
        function errorCallBack(error) {
            // 连接失败时（服务器响应 ERROR 帧）的回调方法
            console.log('连接失败【' + error + '】');
        }
    )

    return () => {return (messageMap) => {
        console.log("start send message!")
        console.log(sendUrl)
        console.log('send client' + client)

        client.send(sendUrl, {}, JSON.stringify({
        messageMap
    }));}}
}

export default socketFun;
