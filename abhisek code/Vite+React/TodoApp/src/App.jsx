import AddToDo from "./componets/AddToDo"
import AppName from "./componets/AppName"
import TodoItem1 from "./componets/TodoItem1"
import TodoItem2 from "./componets/TodoItem2"
import "./App.css";
function App() {
  

  return<center className="todo-container">
  <AppName/>
  <AddToDo/>
<TodoItem1/>

<TodoItem2/>  
  </center>
  
}

export default App
