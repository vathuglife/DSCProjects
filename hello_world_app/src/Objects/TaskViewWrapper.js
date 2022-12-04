import React from 'react';
import './InputLayout.css'
import TaskListViewer from './TaskListViewer';

class TaskViewWrapper extends React.Component{
    constructor(props){
        super(props);     
        this.state = { items: [], text: '' };           
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(){
        return(
            <div>         
                <label className="Prompt" >
                    Add a new task<br/>                                      
                </label> 
                <div className='taskCreator'>
                    <div className="TextInputWrapper">
                        <input type="text" 
                            className="TextInput"
                            placeholder={this.state.value}
                            onSubmit={this.handleChange}
                            onClick={this.deleteDefaultValue}
                            onChange={this.handleChange}                             
                             />  
                    </div>                    
                    <div onClick={this.handleSubmit}>
                        <img className="nextButton"
                            src="./Resources/Images/next-button.png"/>           
                    </div>                
                </div>         
                <p className="Prompt">Upcoming tasks</p>
                <form className='taskListFrame'>
                    <TaskListViewer items={this.state.items}/>
                </form>  
                
            </div>
        );
    }

    handleChange(event){
        this.setState({text:event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
        text: this.state.text,
        id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
    
}
export default TaskViewWrapper;