
function Controls({createHandler, backHandler, fwdHandler, deleteHandler, task}) {
    let title = (task && task.task && task.task.title) ? task.task.title : '';
    let taskId = (task && task.task && task.task.id) ? task.task.id : '';
    return  <section>
        <div className="control">
            <div className="title">Control</div>
            <div>
                <div>
                    <input type="text" id="create" placeholder="Add new Task"/> <button name="create" onClick={()=>createHandler()}>Create</button>
                </div>
                <div>
                    <input type="text" id="task-changes" placeholder="Select Task to Modify" value={title} disabled={true}/>
                    <button name="back" onClick={()=>backHandler(taskId)}>back</button>
                    <button name="forward" onClick={()=>fwdHandler(taskId)}>forward</button>
                    <button name="delete" onClick={()=>deleteHandler(taskId)}>delete</button>
                </div>

            </div>
        </div>
    </section>;
}
export default Controls;