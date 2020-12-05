import React from 'react';
import ReactDOM from 'react-dom';
import './TaskForm.css'

function TaskForm() {
    return (
        <form id='task-form'>
            <input type="text" placeholder='New task' name="name" id='task-field'/>
            <input type="submit" value="Add" />
        </form>
    );
}

export default TaskForm;
