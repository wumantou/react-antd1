const initState = {
    chatContentList : [],
    key : 0
}

export default (state = initState, action) => {
    switch(action.type) {
        case 'CHAT_CONTENT':
            const {message} = action;
            const {chatContentList} = state;
            const key = state.key + 1
            const position = key%2 === 0?'left':'right'
            const headImage = './resource/1.jpg'
            chatContentList.push({message, key, position, headImage})
            // state.chatContentList.push(message)
            // return state
            return Object.assign({}, state, { chatContentList, key})
        default:
            return state
    }
}
