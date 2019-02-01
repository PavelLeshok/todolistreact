import React from 'react';
import { Dropdown} from 'semantic-ui-react';
import './dropdownFilter.css';

const DropdownFilter = ({getValue}) => {
    return(
        <Dropdown text='Priority filter' icon='filter' floating labeled button className='icon'>
            <Dropdown.Menu>
                <Dropdown.Item text='Show all tasks'  onClick={() => getValue('all')}/>  
                <Dropdown.Item text='Show only tasks with low priority'  onClick={() => getValue('low')}/>
                <Dropdown.Item text='Show only tasks with medium priority' onClick={() => getValue('medium')}/> 
                <Dropdown.Item text='Show only tasks with high priority' onClick={() => getValue('high')}/> 
            </Dropdown.Menu>
        </Dropdown>
    )
} 

export default DropdownFilter