import React, {Component} from 'react';
import './registrationForm.css';
import { Button, Form, Modal } from 'semantic-ui-react';

class RegistrationForm extends Component{

    state = {
        name: '',
        password: '',
        passwordConfirm: '',
        classString: ''
    };
    
    handleNameChange = (name) => this.setState({name});
    handlePasswordChange = (password) => this.setState({password});
    handlePasswordConfirmChange = (passwordConfirm) => this.setState({passwordConfirm});

    postUserData = async () => {
        const {name, password} = this.state;
        const userData = {
            name,
            password
        } 
        const options = {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        };
        const res = await fetch('http://192.168.0.103:3001/api/user', options);
        console.log(res)
       
    }


    /*check = () => {
        const {password, passwordConfirm, classString} = this.state;
        let redClassString;
        if (password !== passwordConfirm) redClassString = classString + ' red';
        console.log(redClassString)
        this.setState({classString: redClassString})
        console.log(this.state.classString)
    } */



    render() {
        return (
            <Modal trigger={<Button>Sign Up</Button>} >
            <Modal.Header>Sign Up</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Field>
                        <label>Login</label>
                        <input
                            placeholder='Login'
                            onChange={e => this.handleNameChange(e.target.value)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input
                            placeholder='Password'
                            onChange={e => this.handlePasswordChange(e.target.value)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Confirm password</label>
                        <input
                            id={this.state.classString}
                            placeholder='Confirm password'
                            onChange={e => this.handlePasswordConfirmChange(e.target.value)}
                        />
                    </Form.Field>
                    <Button
                    type='submit'
                    id='registration-button'
                    onClick={this.postUserData}
                    >Sign Up</Button>
                </Form>
            </Modal.Content>
        </Modal>
   
        )
    }    
   
}

export default RegistrationForm 