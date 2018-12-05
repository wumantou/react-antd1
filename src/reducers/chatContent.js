const initState = {
    count: 1,
    isLogin: false
}

export default (state = initState, action) => {
    switch(action.type) {
        case 'CHAT_CONTENT':
            const count = state.count + 1
            const isLogin = action.isLogin;
            return Object.assign({}, state, { count, isLogin})
        default:
            return state
    }
}
