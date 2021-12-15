// import logo from './logo.svg';
import './App.css';
import List from './Components/List'

function App() {
  return (
   <div className = "mydiv">
     <div className = "subdiv" >
     <List work = "No work !" input = "true" button = "true" name = "Todo List" />
     </div>
     <div className = "subdiv">
     <List work = "Try to complete !" input = "false" button = "false" name = "Completed List" />
     </div>
     
    <div className = "subdiv">
     <List input = "false" button = "false" name = "Deleted List" />
     </div>
    </div>
    
     
    
   
  );
}

export default App;
