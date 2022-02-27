import './App.css';
import './components/PageTemplate'
import PageTemplate from './components/PageTemplate';
import TodoInput from './components/TodoInput';
//import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <PageTemplate>  </PageTemplate>
      <TodoInput></TodoInput>
     
      
    </div>
  );
}

export default App;
