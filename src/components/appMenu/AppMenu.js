import React from 'react';
import CreateTaskForm from '../createTaskForm/CreateTaskForm';
import DropdownFilter from '../dropdownFilter/DropdownFilter';
import DropdownSort from '../dropdownSort/DropdownSort';
import './appMenu.css'

const AppMenu = ({getState, getValue, changeSortDirection}) => {
    return(
        <div id='menu-container'>
            <DropdownFilter
            getValue = {getValue}
            />
            <DropdownSort
            changeSortDirection={changeSortDirection}
            />
            <CreateTaskForm 
            getState = {getState}
            />
        </div>
    )
} 

export default AppMenu