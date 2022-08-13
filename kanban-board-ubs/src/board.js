import {useState, useContext} from "react";
import Stages from "./stages";
import Controls from "./Controls";
let taskCounter = 1;
function Board ({stages, contextName}) {
    const taskRef = useContext(contextName);
    let [taskMapping, setTaskList] = useState(taskRef);
    let [selectedTask, setSelectedTask] = useState({});

    const taskMappingFn = function (stage, taskValue) {
        let taskState = Object.assign({}, taskMapping);
        let stageKey = `stage_${stage}`;
        if(taskState[stageKey]) {
            taskState[stageKey].push({id:++taskCounter, title: taskValue, stage: stage});
        } else {
            taskState[stageKey] = [{id:taskCounter, title: taskValue, stage: stage}];
        }
        return taskState;
    }

    const createTask = function () {
        const taskElem = document.getElementById('create');
        const taskValue = taskElem.value;
        if (taskValue !== '') {
            let taskState = taskMappingFn(0, taskValue);
            setTaskList(taskState);
            taskElem.value = '';
            // console.log("createTask Clicked!!");
        }
    };

    const selectTask = function (task = {}) {
        // console.log("selectTask Clicked!!", task);
        setSelectedTask(task);
    };
    const moveFwd = function () {
        if(selectedTask.task && selectedTask.task.stage<3 ) {
            let preStage = selectedTask.task.stage;

            selectedTask.task.stage = preStage+1;
            let taskState = taskMappingFn(preStage+1, selectedTask.task.title);
            taskState[`stage_${preStage}`].splice(selectedTask.taskIndex,1);
            setTaskList(taskState);
            setSelectedTask({});
            console.log("moveFwd Clicked!!");
        }
    };
    const moveBack = function (id = 0) {
        if(selectedTask.task && selectedTask.task.stage>0 ) {
            let preStage = selectedTask.task.stage;

            selectedTask.task.stage = preStage-1;
            let taskState = taskMappingFn(preStage-1, selectedTask.task.title);
            taskState[`stage_${preStage}`].splice(selectedTask.taskIndex, 1);
            setTaskList(taskState);
            setSelectedTask({});
            console.log("moveBack Clicked!!");
        }

    }
    const deleteTask = function () {
        if(selectedTask.task) {
            let stageKey = `stage_${selectedTask.task.stage}`
            taskMapping[stageKey].splice(selectedTask.taskIndex,1);
            let taskState = Object.assign({}, taskMapping);
            setTaskList(taskState);
            setSelectedTask({});
            console.log("deleteTask Clicked!!", selectedTask);
        }
    } 
    return  <>
    <Controls createHandler={createTask} backHandler={moveBack}  fwdHandler={moveFwd} deleteHandler={deleteTask} task={selectedTask} />
    <section className="board">
        {
            Object.entries(stages).map((s, key) => {
                let t = (taskMapping[s[0]]) ? taskMapping[s[0]] : [];
                return <Stages name={s[1]} index={key} taskList={t} key={key} selectHandler={selectTask} />
            })
        }
    </section>
    </> ;
}
export default Board;