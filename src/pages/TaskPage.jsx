import { ChevronsLeft } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router-dom"

function TaskPage(){
    const navigate = useNavigate();
    const [serchParams] = useSearchParams()
    const title = serchParams.get("title")
    const description = serchParams.get("description")

    return(
        <div className='w-screen h-screen bg-gray-800 flex justify-center p-6 '>
        <div className='w-[500px] space-y-4 '>
            <div className="flex justify-center relative">
            <button onClick={()=> navigate(-1)}
    className="active:bg-slate-700 hover-float hover:drop-shadow-sm bg-slate-300  rounded-md p-2 text-slate-700 absolute left-0 ">
        <ChevronsLeft/>
    </button>
    <h1 className=' text-3xl text-center font-bold text-cyan-400'>SAT. Description</h1>
            </div>
           
   <div className="bg-slate-300 p-3 rounded-lg ">
      <h2 className="first-letter:capitalize text-xl text-slate-700 font-bold ">{title}</h2>
   <p className="first-letter:capitalize">{description}</p> 
   </div>

   </div>
   </div>
    )
}
export default TaskPage