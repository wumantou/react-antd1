import React from 'react'
import Content from './Content'
import Input from './Input'
import Layout from "../../layouts/admin";

class Chat extends React.Component{

    render () {
        return (
            <div>
                <Content/>
                <Input/>
            </div>
        )
    }

}

export default () => (
    <Layout >
        <Chat />
    </Layout>
)