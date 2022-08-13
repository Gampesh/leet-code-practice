
function Tasks ({taskList, id, selectHandler}) {
    return  <div className="task" onClick={() => selectHandler({task:taskList, taskIndex:id})} >
        <p className="title">{taskList.title}</p>
    </div>;
}
export default Tasks;