


export const Task = (params)=>{
    let taskColor = params.isCompleted ? "green":"white";
    return (<div className='task' style = {{backgroundColor: taskColor}}>
    <h2>{params.taskname}</h2>
    <button onClick={()=>params.completeTask(params.id)}>Complete</button>
    <button onClick={()=>params.deleteTask(params.id)}>remove</button>
  </div>
  )
}