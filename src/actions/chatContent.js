export const chatContent = (content) => {
    return {
        type: 'CHAT_CONTENT',
        ...content
    }
}
