import './App.css';
import ToDoList from './Objects/TaskViewWrapper';


function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <img src="./Resources/Images/post_it.png" className="App-logo" alt="logo" />
        <p className="App-title">
          To-do List
        </p>     
      </header>
      <body className='App-body'>        
        <ToDoList/>
      </body>        
    </div>
  );
}

export default App;
