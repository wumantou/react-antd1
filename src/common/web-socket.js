import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

const socketFun = async (endpointUrl, subscribeUrl, sendUrl, messageCallback) => {

    const sockjs = new SockJS(endpointUrl);
    console.log(sockjs)
    const client = Stomp.over(sockjs);
    console.log(client)
    try {
        await new Promise((resolve, reject) => {
            client.connect({}, (frame) => {
                console.log('Connected===============================' + frame);
                //接收controller传回来的数据并解析
                client.subscribe(subscribeUrl, (chatting) => {
                    //chatting是controller对应的处理函数的方法
                    //content是后台传回来的Message对象的属性
                    const message = JSON.parse(chatting.body);
                    // console.log('back message!!!!!!!!!!!!!!!!!!!!!!!!!!!!' + message.data)
                    // console.log('subscribe client' + client)
                    messageCallback(message)
                });
                // client.send(sendUrl, {}, JSON.stringify({
                //     'message': "i am test!!!!"
                // }));
                resolve()
            },
            (error) => {
                // 连接失败时（服务器响应 ERROR 帧）的回调方法
                console.log('连接失败【' + error + '】');
                reject()
            }
        )})
        return (messageMap) => {
            console.log("start send message!")
            console.log(sendUrl)
            console.log('send client' + client)

            // client.send(sendUrl, {}, JSON.stringify({
            //     messageMap
            // }));
            client.send(sendUrl, {}, JSON.stringify(messageMap));
        }
    } catch (error) {
        console.log(error)
        return () => {}
    }
}

export default socketFun;
