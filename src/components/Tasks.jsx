import { ChevronsRight, Trash2 } from "lucide-react"
import { useNavigate } from "react-router-dom"
import deleteSound from '/public/delete_sound.mp3'; 


  const playDeleteSound = () => {
    new Audio(deleteSound).play();
  };


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
    className={
`active:bg-slate-700 first-letter:capitalize hover-float hover:drop-shadow-sm w-full bg-slate-400 text-left text-white p-2 rounded-md ${task.isCompleted && 'line-through animate-slideLeft'}`}>
        {task.title}
        </button>

    <button onClick={()=> onSeeDetailsClick(task)}
    className="active:bg-slate-700 hover-float hover:drop-shadow-sm bg-slate-400  rounded-md p-2 text-white ">
        <ChevronsRight/>
    </button>

<button 
  onClick={() => {
    playDeleteSound();
    props.onDeleteTaskClick(task.id);
  }} 
  className="active:bg-slate-700 hover-float hover:drop-shadow-sm bg-slate-400 rounded-md p-2 text-white"
>
  <Trash2 className="icon hover:animate-shake hover:text-red-500" />
</button> 
    </li>
))}
</ul>
)
}
export default Tasks