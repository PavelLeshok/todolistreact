import React, {Component} from 'react';
import './createTaskForm.css';
import { Button, Form, Modal, Radio } from 'semantic-ui-react';


class CreateTaskForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            text: '',
            priority: '',
            completed: false,
            open: false
        }   
    };
   
    changeTitleValue = title => this.setState({title});
    changeDescriptionValue = text => this.setState({text});
    handleChange = priority =>  this.setState({priority});
    postState = () => {
        this.props.getState(this.state);
        this.setState({open:false})
    };

    render(){
        return(
            <Modal trigger={<Button onClick={() => this.setState({open: true})}>New Task</Button>} id='createtaskform-container' open={this.state.open}>
                <Modal.Header>Cteate new task</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label>Title</label>
                            <input
                            onChange={e => this.changeTitleValue(e.target.value)}
                            placeholder='Title'
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Description</label>
                            <textarea
                            onChange={e => this.changeDescriptionValue(e.target.value)}
                            placeholder='Description'
                            ></textarea>
                        </Form.Field>
                        <Form.Field>
                            Select task priority
                        </Form.Field>
                        <Form.Field>
                            <Radio
                            label='Low'
                            name='radioGroup'
                            value='low'
                            checked={this.state.priority === 'low'}
                            onChange={() => this.handleChange('low')}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Radio
                            label='Medium'
                            name='radioGroup'
                            value='medium'
                            checked={this.state.priority === 'medium'}
                            onChange={() => this.handleChange('medium')}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Radio
                            label='High'
                            name='radioGroup'
                            value='high'
                            checked={this.state.priority === 'high'}
                            onChange={() => this.handleChange('high')}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Button 
                            id='createtask-cancel-button' 
                            floated='right'
                            onClick={() => this.setState({open: false})}
                            >Cancel</Button>
                            <Button 
                            type='submit' 
                            id='createtask-create-button' 
                            floated='right'
                            onClick={this.postState}
                            >Create</Button>          
                        </Form.Field>
                    </Form>
                </Modal.Content>
            </Modal>
        )    
    }
} 


export default CreateTaskForm;