import Tasks from "./tasks";

function Stages ({name, index, taskList, selectHandler}) {
    return <div className="stage-col" key={index.toString()}>
        <div className="title">{name}</div>
        <div className="task-card" id={`task_${index}`} stage-id={index}>
            {
                taskList.map((t, key) => {
                    return <Tasks taskList={t} key={key} id={key} selectHandler={selectHandler}/>;
                })
            }
        </div>
    </div>;
}
export default Stages;