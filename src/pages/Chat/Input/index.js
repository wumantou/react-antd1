import React from 'react'
import { Mention } from 'antd';

export default class ChatInput extends React.Component {

    render() {
        function onChange(editorState) {
            console.log(toString(editorState));
        }
        return (
            <Mention
                style={{ width: '100%', height: 100 }}
                onChange={onChange}
                suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}
                multiLines
            />
        )
    }

}
