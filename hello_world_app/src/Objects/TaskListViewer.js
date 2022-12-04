import React from 'react';

import './TaskList.css'

class TaskListViewer extends React.Component{
    render(){
        return(
            <ul >
                {this.props.items.map(item => (
                <li className="eachTask" key={item.id}>{item.text}</li>                                
                ))}
            </ul>            
        );
        
    }
}
export default TaskListViewer