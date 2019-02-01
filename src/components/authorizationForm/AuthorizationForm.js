import React from 'react';
import './authorizationForm.css';
import { Button, Form, Modal } from 'semantic-ui-react';

const AuthorizationForm = () => (
    <Modal trigger={<Button>Sign In</Button>} >
        <Modal.Header>Sign In</Modal.Header>
        <Modal.Content>
            <Form>
                <Form.Field>
                    <label>Login</label>
                    <input placeholder='Login' />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' />
                </Form.Field>
                <Button type='submit' id='authorization-button'>Sign In</Button>
            </Form>
        </Modal.Content>
    </Modal>
)

export default AuthorizationForm