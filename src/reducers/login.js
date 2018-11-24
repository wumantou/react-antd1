const initState = {
    count: 1
}

export default (state = initState, action) => {
    switch(action.type) {
        case 'APP_LOGIN':
            const count = state.count + 1
            return Object.assign({}, state, { count })
        default:
            return state
    }
}