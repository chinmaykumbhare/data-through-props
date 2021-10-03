import logo from './logo.svg';
import './App.css';
import List from './components/List';
import data from "./components/employee.json";

function App() {
  return (
    <div className="App">
      <h1>Employee List</h1>
      {//data -> props}
      <List data={data}/>
    </div>
  );
}

export default App;
