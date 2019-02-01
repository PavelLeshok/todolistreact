import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import './dropdownSort.css';

const DropdownSort = ({changeSortDirection}) => {
    return(
        <Dropdown text='Sort by date' icon='filter' floating labeled button className='icon'>
            <Dropdown.Menu>
                <Dropdown.Item text='Sort' onClick={() => changeSortDirection()}/>
            </Dropdown.Menu>
        </Dropdown>
    )
} 

export default DropdownSort