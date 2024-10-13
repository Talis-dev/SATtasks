import { SquarePlus } from "lucide-react";
import { useState } from "react";

function AddTasks(props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    
        return (
            <div className=" p-6 bg-slate-200 rounded-md shadow-xl mb-2 flex flex-col gap-2">
                <input type="text" placeholder="Digite o título da tarefa" 
                className="hover-float border-slate-400 outline-slate-400 px-4 py-2 rounded-md "
                value={title}
                onChange={(event) => setTitle(event.target.value)}/>

                <input type="text" placeholder="Digite a descrição da tarefa"
                className="hover-float border-slate-400 outline-slate-400 px-4 py-2 rounded-md "
                value={description}
                onChange={(event) => setDescription(event.target.value)}/>

 
                <button onClick={() => {
                    if(!title.trim() || !description.trim()) {
                        return alert ("Preencha o título e a descrição da tarefa")
                    }

                    props.onTaskSubmit(title,description);
                    setTitle("");
                    setDescription("");
                }} 
                className="unique-button hover-float hover:drop-shadow-sm bg-slate-400  rounded-md p-2 text-white font-semibold flex gap-2 justify-center ">
                    Adicionar
        <SquarePlus className="add hover:animate-rotate"/>
    </button>  
    <style jsx>{`
  .unique-button:hover .add,
  .unique-button:hover { /* Adiciona o seletor do botão para incluir o texto */
    color: #00ee55;
  }
  }
`}</style>
            </div>
        )
    }
     
    export default AddTasks;