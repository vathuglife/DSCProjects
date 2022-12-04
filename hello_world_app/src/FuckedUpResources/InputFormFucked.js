import React from 'react';



class InputForm extends React.Component{
    constructor(props){
        super(props);        
        this.state = {value:'Cường cờ him to...'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }
    handleChange(event){
        this.setState({value:event.target.value});
    }
    handleSubmit (event) {        
        alert("This is what you have entered: "+this.state.value);        
        
    }
    changeBackgroundColor(event){
        this.color='white';
    }
    deleteDefaultValue(event){
        this.taskInput.value = '';
    }
    render(){
        return(                  
            <div>                              
            </div>                                
        )
    }
}
export default InputForm;


