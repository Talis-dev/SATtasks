import { ChevronsRight, Trash2 } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Tasks(props){
  const navigate = useNavigate()

function onSeeDetailsClick(task){
    //navigate(`/task?title=${task.title}&description=${task.description}`)
    const query = new URLSearchParams();
    query.set("title",task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
}
return ( 
<ul className="space-y-2 p-6 bg-slate-200 rounded-md shadow-xl">
{props.tasks.map((task)=> (
<li key={task.id} className=" flex gap-3">
    
    <button onClick={() => props.onTaskClick(task.id)} 
    className={`first-letter:capitalize hover-float hover:drop-shadow-sm w-full bg-slate-400 text-left text-white p-2 rounded-md ${task.isCompleted && 'line-through'}`}>
        {task.title}
        </button>

    <button onClick={()=> onSeeDetailsClick(task)}
    className="hover-float hover:drop-shadow-sm bg-slate-400  rounded-md p-2 text-white ">
        <ChevronsRight/>
    </button>
    <style jsx>{`
  .hover-float:hover .icon {
    color: #ee0000;
  }
`}</style>
    <button onClick={() => props.onDeleteTaskClick(task.id)} className=" hover-float hover:drop-shadow-sm bg-slate-400  rounded-md p-2 text-white ">
        <Trash2 className="icon hover:animate-shake"/>
    </button>    
    </li>
))}
</ul>
)
}
export default Tasks