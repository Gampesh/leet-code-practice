import {useState, createContext} from "react";
import Board from "./board";

const stages = {
    stage_0:'Backlog',
    stage_1:'To Do',
    stage_2:'Ongoing',
    stage_3:'Done'
};
const TaskContext = createContext();

function App() {
    let [taskMapping, setTaskList] = useState({});
    return (
    <div className="App">
      <header className="App-header"> Kanban Board </header>
        <TaskContext.Provider value={taskMapping}>
        <Board stages={stages} contextName={TaskContext} />
        </TaskContext.Provider>
    </div>
  );
}

export default App;
