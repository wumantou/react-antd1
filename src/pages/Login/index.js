import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux'
import { login } from '../../actions/login'
import axios from '../../common/axios-core';
import './index.css'

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = async (e) => {
        e.preventDefault();
        await axios.get('http://127.0.0.1:8761/test').then((data) => {
            console.log(data)
        })
        this.props.login()
        // this.props.form.validateFields((err, values) => {
        //     if (!err) {
        //         console.log('Received values of form: ', values);
        //     }
        // });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="/">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="/">register now!</a>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

const Temp = connect(
    state => {
        console.log(state)
        return state
    },
    dispatch => ({ login: () => dispatch(login())})
)(WrappedNormalLoginForm)

export default () => (
    <Temp />
    /*<DefaultLayout>
        <Temp />
    </DefaultLayout>*/
)