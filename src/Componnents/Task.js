import React from 'react';
import Tasks from './Tasks';

const Task = ({task}) => {
    return ( <h1>{task.title}</h1> );
}
 
export default Task;