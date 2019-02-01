import React, {Component} from 'react';
import { Button, Form, Modal, Radio } from 'semantic-ui-react';

class UpdateFormButton extends Component{
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
    
    getTask = (obj) => {
        const {title, text, priority, completed} = obj;
        this.setState({
            title,
            text,
            priority,
            completed
        })
    };

    changeTitleValue = title => this.setState({title});
    changeDescriptionValue = text => this.setState({text});
    handleChange = priority =>  this.setState({priority});
   
    getUpdatedTask = () => {
        const {title, text, priority, completed} = this.state;
        const updatedTask = {
            _id: this.props.task._id,
            title,
            text,
            priority,
            completed
        };
        this.props.updateTask(updatedTask)
        this.setState({open: false})
    };

    render(){
        return(
            <Modal trigger={<Button onClick={() => {this.getTask(this.props.task); this.setState({open: true})} }>Edit</Button>} id='createtaskform-container' open={this.state.open}>
                <Modal.Header>Cteate new task</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label>Title</label>
                            <input
                            onChange={e => this.changeTitleValue(e.target.value)}
                            //placeholder='Title'
                            value={this.state.title}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Description</label>
                            <input
                            onChange={e => this.changeDescriptionValue(e.target.value)}
                            //placeholder='Description'
                            value={this.state.text}
                            />
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
                            onClick={this.getUpdatedTask}
                            >Create</Button>          
                        </Form.Field>
                    </Form>
                </Modal.Content>
            </Modal>
        )    
    }
} 


export default UpdateFormButton ;


