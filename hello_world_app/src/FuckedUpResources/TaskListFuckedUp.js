import React from 'react';

import './Objects/TaskList.css'
import {useState} from 'react';

/*FIRST QUESTION: WHY DON'T WE JUST BIND AN ARRAY TO THE HTML, DISPLAY IT, AND UPDATE IT WHENEVER WE WANT TO?
The answer is simple: Arrays in JavaScript are IMMUTABLE (can't be changed).
This means, to actually update an array, we need to create A COPY OF the old array, then SMACK-DOWN that
COPY array on the OLD ARRAY. How it is done is stated down below:*/ 

/*ABOUT useState:
NOTE: STATE is basically anything (array,string,...) (that we want to track.
useState is a function that does 2 things:
1. Keeps track of the given  STATE (in this case, it is the array that contains the Dummy Task 1.)
2. Returns 2 values: 1 is the name for the current state (object) in useState's parenthesis (or in this case, the array that contains Dummy Task 1.)
                     2 is the newTask function, which updates the current state (1) 
                     
NOTE:useState can ONLY be created in FUNCTIONS, NOT CLASSES!*/

export default function TaskList(){
    
    const [tasksArray, addNewTask] = useState(['Dummy Task 1']);
    //The handleAddButtonClick is for the HTML button (called from the outside), and the addNewTask is for the useState function.
    const handleAddButtonClick = () => {
        addNewTask(current => [...current,"dummy!"]);
    };    
            
    //Whatever is placed in the return function will be printed out on the Screen.
    return(
        <div className="taskListFrame">
            {tasksArray.map((eachTask, index) => {
            return (
                <div>                       

                    <div key={index} >
                        <h2 className='eachTask'>
                            {eachTask}</h2>
                    </div>
                </div>
            
            );
        })}
        </div>
    );                 
}
