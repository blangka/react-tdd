import './App.css';
import Todo from "./components/todo";
import ListContainer from "./containers/ListContainer";
import ApiTestContainer from "./containers/ApiTestContainer";

function App() {
    const todos = [{
        id: 1,
        title: 'wash dished',
        completed: false
    },
        {
            id: 2,
            title: 'make dinner',
            completed: true
        }];



  return (
    <div className="App">
        {todos.map((todo) => {
            return <Todo todo={todo}/>
        })}
        <ListContainer/>
        <ApiTestContainer/>
    </div>
  );
}

export default App;
